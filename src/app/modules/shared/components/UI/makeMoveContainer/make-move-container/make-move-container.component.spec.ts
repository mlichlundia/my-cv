import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMoveContainerComponent } from './make-move-container.component';

describe('MakeMoveContainerComponent', () => {
  let component: MakeMoveContainerComponent;
  let fixture: ComponentFixture<MakeMoveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeMoveContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeMoveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
