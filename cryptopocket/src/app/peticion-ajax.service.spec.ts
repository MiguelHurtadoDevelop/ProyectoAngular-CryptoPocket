import { TestBed } from '@angular/core/testing';

import { PeticionAjaxService } from './peticion-ajax.service';

describe('PeticionAjaxService', () => {
  let service: PeticionAjaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionAjaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
