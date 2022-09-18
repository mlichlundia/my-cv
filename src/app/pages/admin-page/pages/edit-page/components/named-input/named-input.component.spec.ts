import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedInputComponent } from './named-input.component';

describe('NamedInputComponent', () => {
  let component: NamedInputComponent;
  let fixture: ComponentFixture<NamedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
