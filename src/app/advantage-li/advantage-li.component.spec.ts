import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantageLiComponent } from './advantage-li.component';

describe('AdvantageLiComponent', () => {
  let component: AdvantageLiComponent;
  let fixture: ComponentFixture<AdvantageLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvantageLiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantageLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
