import { ComponentFixture, TestBed } from '@angular/core/testing';
import { resetpasswordComponent } from './resetpassword.component';

describe('resetpasswordComponent', () => {
  let component: resetpasswordComponent;
  let fixture: ComponentFixture<resetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ resetpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(resetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
