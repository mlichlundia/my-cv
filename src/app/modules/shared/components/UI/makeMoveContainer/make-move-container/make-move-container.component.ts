import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-make-move-container',
  templateUrl: './make-move-container.component.html',
  styleUrls: ['./make-move-container.component.scss']
})
export class MakeMoveContainerComponent {
  @Input('extent') public extent: number = 1.5
  @ViewChild('makeMoveTarget') target!: ElementRef
}
