import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from '@ui/components/button';
import { SideBarComponent } from './side-bar.component';

describe('Side-bar component', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarComponent, ButtonComponent]
    });
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });
});

