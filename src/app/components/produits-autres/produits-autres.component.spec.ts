import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsAutresComponent } from './produits-autres.component';

describe('ProduitsAutresComponent', () => {
  let component: ProduitsAutresComponent;
  let fixture: ComponentFixture<ProduitsAutresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsAutresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsAutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
