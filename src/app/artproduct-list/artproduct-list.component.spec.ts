import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtproductListComponent } from './artproduct-list.component';

describe('ArtproductListComponent', () => {
  let component: ArtproductListComponent;
  let fixture: ComponentFixture<ArtproductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtproductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtproductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
