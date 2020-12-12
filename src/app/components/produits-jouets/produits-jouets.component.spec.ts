import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsJouetsComponent } from './produits-jouets.component';

describe('ProduitsJouetsComponent', () => {
  let component: ProduitsJouetsComponent;
  let fixture: ComponentFixture<ProduitsJouetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsJouetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsJouetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
