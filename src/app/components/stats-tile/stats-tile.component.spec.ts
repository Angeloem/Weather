import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTileComponent } from './stats-tile.component';

describe('StatsTileComponent', () => {
  let component: StatsTileComponent;
  let fixture: ComponentFixture<StatsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
