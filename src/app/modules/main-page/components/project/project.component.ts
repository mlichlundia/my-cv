import {Component, Input} from '@angular/core';
import {ProjectInterface} from "../../../shared/interfaces/project.interface";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() public project!: ProjectInterface
}
