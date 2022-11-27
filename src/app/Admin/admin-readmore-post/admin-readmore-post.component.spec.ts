import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReadmorePostComponent } from './admin-readmore-post.component';

describe('AdminReadmorePostComponent', () => {
  let component: AdminReadmorePostComponent;
  let fixture: ComponentFixture<AdminReadmorePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReadmorePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReadmorePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
