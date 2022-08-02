import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  @ViewChild(SwiperComponent, { static: false })
  swiper?: SwiperComponent;

  projects!: Project[];

  constructor(
    private projectService: ProjectsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getData().subscribe((data) => {
      this.projects = data;
      this.cdr.markForCheck();
    });
  }

  next() {
    this.swiper?.swiperRef.slideNext();
  }

  prev() {
    this.swiper?.swiperRef.slidePrev();
  }
}
