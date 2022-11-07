import {Component, Input} from '@angular/core';
import {Icons} from "./constants";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() name: number = 0

  public icons = Icons
}
