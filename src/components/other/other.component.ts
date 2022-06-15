import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OtherService } from 'src/services/other/other.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent implements OnInit {
  isEditable: boolean = false;

  educationData: string[] = [''];
  langs: string[] = [''];

  constructor(private otherService: OtherService) {}

  ngOnInit(): void {
    this.showData();
  }

  showData() {
    this.otherService
      .getEducation()
      .subscribe((data) => (this.educationData = data));

    this.otherService.getLangs().subscribe((data) => (this.langs = data));
  }

  onEdit(event: Event) {
    event.preventDefault();
    this.isEditable = true;
  }

  onSave(form: NgForm, event: Event) {
    event.preventDefault();
    this.isEditable = false;

    if (
      this.educationData[0] === form.value.education ||
      form.value.education === ''
    ) {
      return;
    }

    this.saveEducation([form.value.education]);
  }

  saveEducation(data: string[]) {
    this.educationData = data;
    this.otherService
      .setEducation(data)
      .subscribe((message) => console.log(message));
  }

  onDelete(data: string) {
    const updatedData = this.langs.filter((item) => item !== data);
    this.saveLangs(updatedData);
  }

  onPush(form: NgForm, event: Event) {
    event.preventDefault();
    const updatedData: string[] =
      this.langs && this.langs.length > 0
        ? [...this.langs, form.value.lang]
        : [form.value.lang];
    this.saveLangs(updatedData);
    form.reset();
  }

  saveLangs(data: string[]) {
    this.langs = data;
    this.otherService
      .setLangs(data)
      .subscribe((message) => console.log(message));
  }
}
