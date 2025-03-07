import { TestBed } from '@angular/core/testing';

import { TableRowsService } from './table-rows.service';

describe('TableRowsService', () => {
  let service: TableRowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableRowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
