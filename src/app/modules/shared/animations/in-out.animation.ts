import {animate, keyframes, style, transition, trigger} from "@angular/animations";

export const inOutAnimation = trigger('inOut', [
  transition(':enter', [
    style({opacity: 0}),
    animate('400ms ease-in-out',
      style({
        opacity: 1,
        visibility: 'visible'
      })
    )
  ]),
  transition(':leave', [
    animate('400ms ease-in-out',
      keyframes([
        style({opacity: 0, offset: 0}),
        style({position: 'absolute', offset: 0.4}),
      ])
    )]
  )
])
