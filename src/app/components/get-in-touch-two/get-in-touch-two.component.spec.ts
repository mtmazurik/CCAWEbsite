import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInTouchTwoComponent } from './get-in-touch-two.component';

describe('GetInTouchTwoComponent', () => {
  let component: GetInTouchTwoComponent;
  let fixture: ComponentFixture<GetInTouchTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetInTouchTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInTouchTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
