import {TestBed} from '@angular/core/testing';

import {EducationLangService} from './education-lang.service';

describe('EducationLangService', () => {
  let service: EducationLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
