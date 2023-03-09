import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdinComponent } from './stdin.component';

describe('StdinComponent', () => {
  let component: StdinComponent;
  let fixture: ComponentFixture<StdinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
