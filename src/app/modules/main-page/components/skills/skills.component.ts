import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SkillsService } from "../../../shared/services/skills/skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef, public skillsService: SkillsService) {
  }

  ngOnInit(): void {
    if(this.skillsService.skills.length) {
      return
    }
    
    this.skillsService.getSkills().subscribe(() => this.cdr.markForCheck())
  }
}
