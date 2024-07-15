import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionGridComponent } from './opinion-grid.component';

describe('OpinionGridComponent', () => {
  let component: OpinionGridComponent;
  let fixture: ComponentFixture<OpinionGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpinionGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpinionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
