import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-make-move-container',
  templateUrl: './make-move-container.component.html',
  styleUrls: ['./make-move-container.component.scss']
})
export class MakeMoveContainerComponent {
  @Input('extent') public extent: number = 1.5
  @ViewChild('makeMoveTarget') target!: ElementRef

  @HostListener('mouseenter') private onMouseEnter() {
    this.addTransition()
  }

  @HostListener('mouseleave') private onMouseLeave() {
    this.addTransition()
  }

  private addTransition() {
    this.target && (this.target.nativeElement.style.transition = '.25s transform')
    setTimeout(() => {
      this.removeTransition()
    }, 250)
  }

  private removeTransition() {
    this.target && (this.target.nativeElement.style.transition = 'none')
  }
}
