import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { ProjectInterface } from "../../../shared/interfaces/project.interface";

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
})
export class ProjectPreviewComponent {
  @Input() public project!: ProjectInterface

  @ViewChild('makeMoveTarget') public target!: ElementRef
  public extent: number = 3

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
