import { TestBed, inject } from '@angular/core/testing';

import { LaOutreachService } from './la-outreach.service';

describe('LaOutreachService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaOutreachService]
    });
  });

  it('should be created', inject([LaOutreachService], (service: LaOutreachService) => {
    expect(service).toBeTruthy();
  }));
});
