import {inject, TestBed} from '@angular/core/testing';

import {HomeResolverService} from './home-resolver.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeService} from './home.service';

describe('HomeResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeResolverService, HomeService],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([HomeResolverService], (service: HomeResolverService) => {
    expect(service).toBeTruthy();
  }));
});
