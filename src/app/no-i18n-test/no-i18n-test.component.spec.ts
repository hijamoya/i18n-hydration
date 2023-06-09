import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoI18nTestComponent } from './no-i18n-test.component';

describe('NoI18nTestComponent', () => {
  let component: NoI18nTestComponent;
  let fixture: ComponentFixture<NoI18nTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoI18nTestComponent]
    });
    fixture = TestBed.createComponent(NoI18nTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
