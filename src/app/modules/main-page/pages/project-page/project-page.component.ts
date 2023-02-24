import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProjectInterface } from '../../../shared/interfaces/project.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PROJECTS_MOCK } from '../../../shared/mocks/projects.mock';
import { getDeviceType } from "../../../shared/functions/getDeviceType";

@Component({
  selector: 'app-project-preview-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  public project!: ProjectInterface;
  public isLoaded: boolean[] = [false, false, false]
  public isVideoLoaded: boolean = false;
  public isVideoShown: boolean = false
  
  constructor(private cdr: ChangeDetectorRef, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      const currentProject = PROJECTS_MOCK.find(
        (project: ProjectInterface) => project.id === +res['id']
      );

      if (!currentProject) {
        this.router.navigate(['error', 'page-not-found']);
        return;
      }

      this.project = currentProject;
      this.isVideoShown = this.showVideo()
    });
  }

  public onLoad(index: number) {
    this.isLoaded[index] = true
  }

  onVideoLoad() {
    this.isVideoLoaded = true
  }

  public showVideo():boolean {
    return getDeviceType() !== 'mobile'
  }
}
