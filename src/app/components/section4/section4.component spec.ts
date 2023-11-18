import { ComponentFixture, TestBed } from "@angular/core/testing"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { Section4Component } from "./section4.component"

describe('Section4Component', () => {
  let fixture: ComponentFixture<Section4Component>;
  let componentInstance: Section4Component;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,

      ],
      providers: [

      ],
      declarations: [
        Section4Component
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section4Component);
    componentInstance = fixture.componentInstance;
  });

  it('should have heading as Sign In', () => {
    const headerTitle = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(headerTitle.innerHTML).toBe('Sign in');
  });

  it('should have valid email format', () => {
    const loginFormEmailControl = componentInstance.loginForm.controls.email;
    console.log(loginFormEmailControl);
    expect(loginFormEmailControl.valid).toBeFalsy();
    loginFormEmailControl.setValue('k@c.com');
    expect(loginFormEmailControl.status).toBe('VALID');
  });
})