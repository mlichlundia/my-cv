import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.scss']
})
export class SmallButtonComponent {
  @ViewChild('stickTarget') public target!: ElementRef
}
