import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManageItemComponent } from './contact-manage-item.component';

describe('ContactManageItemComponent', () => {
  let component: ContactManageItemComponent;
  let fixture: ComponentFixture<ContactManageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactManageItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactManageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
