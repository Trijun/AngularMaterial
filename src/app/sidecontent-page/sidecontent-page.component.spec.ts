import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidecontentPageComponent } from './sidecontent-page.component';

describe('SidecontentPageComponent', () => {
  let component: SidecontentPageComponent;
  let fixture: ComponentFixture<SidecontentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidecontentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidecontentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
