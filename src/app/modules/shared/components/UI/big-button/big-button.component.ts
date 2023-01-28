import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { MouseService } from "../../../services/mouse/mouse.service";

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.scss']
})
export class BigButtonComponent {
  @Input() type: 'submit' | 'button' = "button"

  @ViewChild('stickTarget') public target!: ElementRef

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
