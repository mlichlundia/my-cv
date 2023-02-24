import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ProjectInterface } from "../../../shared/interfaces/project.interface";

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
})
export class ProjectPreviewComponent {
  @Input() public project!: ProjectInterface
  public isLoaded: boolean = false

  @ViewChild('makeMoveTarget') public target!: ElementRef
  public extent: number = 1.5

  public onLoad() {
    this.isLoaded = true
  } 
}
