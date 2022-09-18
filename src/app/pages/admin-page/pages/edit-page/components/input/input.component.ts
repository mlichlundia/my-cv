import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() target!: string;
  @Output() action: EventEmitter<string> = new EventEmitter<string>();
  form!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this._fb.group([]);
  }

  setControl(): void {
    this.form.addControl(this.target, new FormControl());
  }

  handleAction(): void {
    const value: string = this.form.get(this.target)?.value
      ? this.form.get(this.target)!.value
      : '';

    this.action.emit(value);
  }
}
//custom input with reusable key
