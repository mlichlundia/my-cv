import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { SkillsService } from 'src/services/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {
  skills!: Record<string, string>[];

  constructor(
    private _skillsServise: SkillsService,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.showSkills();
  }

  showSkills() {
    this._skillsServise.getSkills().subscribe((data) => {
      this.skills = data;
      this._cdr.markForCheck();
    });
  }
}
