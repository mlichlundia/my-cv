import {Component} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {animate, animateChild, group, keyframes, query, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('inOut', [
      transition(':enter', [style({opacity: 0}), animate('400ms 400ms ease-in-out', style({
        opacity: 1,
        visibility: 'visible'
      }))]),
      transition(':leave', [
        animate('1000ms ease-in-out',
          keyframes([
            style({opacity: 0, offset: 0}),
            style({position: 'absolute', offset: 0.4}),
          ])
        )]
      )
    ]),
    trigger('expandNarrow', [
      state('expand', style({
        height: '20rem'
      })),
      state('narrow', style({
        height: '17rem'
      })),
      transition('* => *', [
        group([
          query('@inOut', animateChild()),
          animate('400ms ease-in-out'),
        ]),
      ]),
    ])
  ]
})
export class MenuComponent {
  constructor(public auth: AuthService) {
  }
}
