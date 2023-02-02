import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stick-to-mouse-container',
  templateUrl: './stick-to-mouse-container.component.html',
  styleUrls: ['./stick-to-mouse-container.component.scss']
})
export class StickToMouseContainerComponent {
  @Input('stickRate') rate: number = 5

  @ViewChild('stickTarget') target!: ElementRef

  @HostListener('mouseenter')
  private onMouseEnter() { }
}
