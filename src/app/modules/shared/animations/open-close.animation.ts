import { animate, style, transition, trigger } from '@angular/animations';

export const openCloseAnimation = trigger('openClose', [
  transition(':enter', [
    style({
      transform: 'translate(-23rem)',
      pointerEvents: 'none',
    }),
    animate(
      '400ms 0.2ms ease-in-out',
      style({ transform: 'translate(0)', pointerEvents: 'all' })
    ),
  ]),
  transition(':leave', [
    animate(
      '400ms 0.2ms ease-in-out',
      style({ transform: 'translate(23rem)', pointerEvents: 'none' })
    ),
  ]),
]);
