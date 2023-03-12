import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require a username', () => {
    component.userProfileForm.setValue({
      "userName": "",
      "skillLevel": ""
    });
    expect(component.userProfileForm.valid).toEqual(false);
  });

  it('form should be valid with a username', () => {
    component.userProfileForm.setValue({
      "userName": "test",
      "skillLevel": ""
    });
    expect(component.userProfileForm.valid).toEqual(true);
  });

});
