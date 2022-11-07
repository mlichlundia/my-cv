import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.scss']
})
export class EditContactsComponent implements OnInit {
  public form!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm()
    console.log(this.title, this.form)

  }

  public get title(): AbstractControl<string> {
    return this.form.get('title')!
  }

  public get link(): AbstractControl<string> {
    return this.form.get('link')!
  }

  public get titleError(): string {
    if (!this.title?.errors) {
      return ''
    }

    if (this.title?.errors['required']) {
      return 'Username is required'
    }

    if (this.title?.errors['minlength']) {
      return `Username should contain not less than ${this.title.errors['minlength']['requiredLength']} symbols`
    }

    if (this.title?.errors['maxlength']) {
      return `Username should contain not more than ${this.title.errors['maxlength']['requiredLength']} symbols`
    }

    return 'Title is invalid'
  }

  public get linkError(): string {
    if (!this.link?.errors) {
      return ''
    }

    if (this.link?.errors['required']) {
      return 'Username is required'
    }

    if (this.link?.errors['minlength']) {
      return `Username should contain not less than ${this.link.errors['minlength']['requiredLength']} symbols`
    }

    return 'Social link is invalid'
  }

  public onSubmit() {
    if(this.form.invalid || this.form.pristine) {
      return
    }

    console.log(this.form.value)
    this.resetForm()
  }

  private resetForm() {
    this.form.reset()

    this.title.setErrors(null)
    this.link.setErrors(null)
  }

  private initForm(): void {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      link: new FormControl('', [Validators.required, Validators.minLength(3),]),
    })
  }
}
