import { ComponentFixture, TestBed } from '@angular/core/testing';
import { forgetemailComponent } from './forgetemail.component';

describe('forgetemailComponent', () => {
  let component: forgetemailComponent;
  let fixture: ComponentFixture<forgetemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ forgetemailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(forgetemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
