import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Project } from 'src/interfaces/project';
import { ProjectsService } from 'src/services/projects/projects.service';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([EffectFade, Navigation]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit {
  @ViewChild(SwiperComponent, { static: false })
  swiper?: SwiperComponent;

  projects: Project[] = [
    {
      title: '',
      description: '',
      descriptionShort: '',
      images: [''],
      links: [{ url: '', type: '' }],
    },
  ];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getData().subscribe((data) => (this.projects = data));
  }

  setProjects(data: Project[]) {
    console.log(this.projects);
    this.projectService
      .setData(data)
      .subscribe((message) => console.log(message));
  }

  addProject() {
    console.log('add');
  }

  removeProject() {
    console.log('remove');
  }

  next() {
    this.swiper?.swiperRef.slideNext();
  }

  prev() {
    this.swiper?.swiperRef.slidePrev();
  }
}
