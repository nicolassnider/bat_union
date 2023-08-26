import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPluginComponent } from './calendarplugin.component';

describe('CalendarComponent', () => {
  let component: CalendarPluginComponent;
  let fixture: ComponentFixture<CalendarPluginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarPluginComponent]
    });
    fixture = TestBed.createComponent(CalendarPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
