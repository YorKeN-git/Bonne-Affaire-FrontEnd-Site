import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsHighTechComponent } from './produits-high-tech.component';

describe('ProduitsHighTechComponent', () => {
  let component: ProduitsHighTechComponent;
  let fixture: ComponentFixture<ProduitsHighTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsHighTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsHighTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
