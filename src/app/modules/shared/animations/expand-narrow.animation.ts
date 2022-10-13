import {animate, animateChild, group, query, state, style, transition, trigger} from "@angular/animations";

export const expandNarrowAnimation = trigger('expandNarrow', [
  state('expand', style({
    height: '20rem'
  })),
  state('narrow', style({
    height: '17rem'
  })),
  transition('narrow <=> expand', [
    group([
      query('@inOut', animateChild()),
      animate('400ms ease-in-out'),
    ]),
  ]),
])
