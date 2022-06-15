import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skill } from 'src/interfaces/skill';
import { SkillsService } from 'src/services/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [{ title: '' }];

  constructor(private skillsServise: SkillsService) {}

  ngOnInit(): void {
    this.showSkills();
  }

  showSkills() {
    this.skillsServise.getSkills().subscribe((data) => (this.skills = data));
  }

  onPush(form: NgForm, event: Event) {
    event.preventDefault();
    const updatedSkills = [...this.skills, { title: form.value.skill }];
    this.updateSkills(updatedSkills);

    form.reset();
  }

  onDelete(skill: Skill) {
    const updatedSkills = this.skills.filter(
      (item) => item.title !== skill.title
    );
    this.updateSkills(updatedSkills);
  }

  updateSkills(updatedSkills: Skill[]) {
    this.skills = updatedSkills;

    this.skillsServise
      .setData(updatedSkills)
      .subscribe((message) => console.log(message));
  }
}
