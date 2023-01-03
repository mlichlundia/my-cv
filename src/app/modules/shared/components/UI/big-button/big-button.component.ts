import {Component, HostListener, Input} from '@angular/core';
import {MouseService} from "../../../services/mouse/mouse.service";

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styles: [':host {width: fit-content; display: inline-block}']
})
export class BigButtonComponent {
  @Input() type: 'submit' | 'button' = "button"

  @HostListener('mouseenter')
  private onMouseEnter() {
    this.mouseService.isHovered = true
  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    this.mouseService.isHovered = false
  }

  constructor(private mouseService: MouseService) { }
}
