import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EducationLangService } from "../../../shared/services/education-lang/education-lang.service";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef, public langService: EducationLangService) { }

  ngOnInit(): void {
    this.langService.getLangs().subscribe(() => this.cdr.markForCheck())
  }

}
