import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() src: string = '#'

  @ViewChild('stickTarget') target!: ElementRef
}
