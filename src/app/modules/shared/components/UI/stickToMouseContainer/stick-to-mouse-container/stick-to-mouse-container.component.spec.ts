import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickToMouseContainerComponent } from './stick-to-mouse-container.component';

describe('StickToMouseContainerComponent', () => {
  let component: StickToMouseContainerComponent;
  let fixture: ComponentFixture<StickToMouseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickToMouseContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickToMouseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
