import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidecontentPreferencePageComponent } from './sidecontent-preference-page.component';

describe('SidecontentPreferencePageComponent', () => {
  let component: SidecontentPreferencePageComponent;
  let fixture: ComponentFixture<SidecontentPreferencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidecontentPreferencePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidecontentPreferencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
