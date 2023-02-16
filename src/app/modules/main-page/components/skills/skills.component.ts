import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SkillInterface } from "../../../shared/interfaces/skill.interface";
import { SkillsService } from "../../../shared/services/skills/skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills: SkillInterface[] | null = null

  constructor(private cdr: ChangeDetectorRef, private skillsService: SkillsService) {
  }

  ngOnInit(): void {
    this.getSkills()
  }

  private getSkills(): void {
    this.skillsService.getSkills().subscribe((res) => {
      console.log(res)
      this.skills = res
      this.cdr.markForCheck()
    })
  }
}
