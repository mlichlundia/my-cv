import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ProjectInterface } from "../../../shared/interfaces/project.interface";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() public project!: ProjectInterface

  @ViewChild('makeMoveTarget') public target!: ElementRef

  public extent: number = 5
}
