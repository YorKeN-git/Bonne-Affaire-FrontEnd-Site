import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsGrosElectromenagerComponent } from './produits-gros-electromenager.component';

describe('ProduitsGrosElectromenagerComponent', () => {
  let component: ProduitsGrosElectromenagerComponent;
  let fixture: ComponentFixture<ProduitsGrosElectromenagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsGrosElectromenagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsGrosElectromenagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
