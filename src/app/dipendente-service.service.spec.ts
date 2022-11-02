import { TestBed } from '@angular/core/testing';

import { DipendenteServiceService } from './dipendente-service.service';

describe('DipendenteServiceService', () => {
  let service: DipendenteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DipendenteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
