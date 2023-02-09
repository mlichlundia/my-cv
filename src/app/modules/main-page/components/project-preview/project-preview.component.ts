import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ProjectInterface } from "../../../shared/interfaces/project.interface";

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
})
export class ProjectPreviewComponent implements AfterViewInit{
  @Input() public project!: ProjectInterface

  @ViewChild('makeMoveTarget') public target!: ElementRef
  @ViewChild('video') public video!: ElementRef

  public extent: number = 25

  ngAfterViewInit(): void {
    if(this.video.nativeElement.muted) {
      this.video.nativeElement.play()
    }
  }
}
