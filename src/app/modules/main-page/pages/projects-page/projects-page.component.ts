import { Component } from '@angular/core';
import { ProjectInterface } from "../../../shared/interfaces/project.interface";
import { PROJECTS_MOCK } from "../../../shared/mocks/projects.mock";

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  public projects: ProjectInterface[] = PROJECTS_MOCK
}
