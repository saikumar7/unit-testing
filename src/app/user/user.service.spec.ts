
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe("UserService", () => {
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    userService = TestBed.inject(UserService);
  })

  it('should create service', () => {
    expect(userService).toBeTruthy();
  })

  it('should get users', () => {
    userService.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(0);
    })
  })
})
