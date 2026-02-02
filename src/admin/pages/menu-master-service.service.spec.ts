import { TestBed } from '@angular/core/testing';

import { MenuMasterServiceService } from './menu-master-service.service';

describe('MenuMasterServiceService', () => {
  let service: MenuMasterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuMasterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
