import {Component} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {expandNarrowAnimation} from "../../../animations/expand-narrow.animation";
import {inOutAnimation} from "../../../animations/in-out.animation";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    inOutAnimation,
    expandNarrowAnimation
  ]
})
export class MenuComponent {
  constructor(public auth: AuthService) {}
}
