import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {EducationLangService} from "../../../shared/services/education-lang/education-lang.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit{
  public education: string = ''

  constructor(private cdr: ChangeDetectorRef, public educationService: EducationLangService) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe((res) => {
      this.education = res[0]
      this.cdr.markForCheck()
    })
  }
}
