import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGotopostComponent } from './user-gotopost.component';

describe('UserGotopostComponent', () => {
  let component: UserGotopostComponent;
  let fixture: ComponentFixture<UserGotopostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGotopostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGotopostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
