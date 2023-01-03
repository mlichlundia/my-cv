import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const expandNarrowAnimation = trigger('expandNarrow', [
  state(
    'expand',
    style({
      height: '24rem',
    })
  ),
  state(
    'narrow',
    style({
      height: '21rem',
    })
  ),
  transition('narrow <=> expand', [
    group([
      query('@inOut', animateChild()),
      animate('400ms ease-in-out'),
    ]),
  ]),
]);
