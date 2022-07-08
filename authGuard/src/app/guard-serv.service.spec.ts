import { TestBed } from '@angular/core/testing';

import { GuardServService } from './guard-serv.service';

describe('GuardServService', () => {
  let service: GuardServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
