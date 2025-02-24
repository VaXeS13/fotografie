import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamillyComponent } from './familly.component';

describe('FamillyComponent', () => {
  let component: FamillyComponent;
  let fixture: ComponentFixture<FamillyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamillyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamillyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
