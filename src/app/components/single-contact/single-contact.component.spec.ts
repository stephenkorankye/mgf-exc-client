import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleContactComponent } from './single-contact.component';

describe('SingleContactComponent', () => {
  let component: SingleContactComponent;
  let fixture: ComponentFixture<SingleContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleContactComponent]
    });
    fixture = TestBed.createComponent(SingleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
