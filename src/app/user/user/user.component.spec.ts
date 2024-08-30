import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let service: UserService;
  let serviceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [UserService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UserService);
    serviceSpy = spyOn(service, "getUsers").and.returnValues(of([
      {name: 'John', age: 35},
      {name: 'Jane', age: 30}
    ])) 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users on init', () => {
    fixture.detectChanges();
    expect(serviceSpy).toHaveBeenCalled();
  })

  it('should retrieve users on button clicked', () => {
    fixture.detectChanges();
    serviceSpy.calls.reset();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(serviceSpy).toHaveBeenCalled();
  })
});
