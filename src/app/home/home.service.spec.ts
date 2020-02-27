import { TestBed, inject } from '@angular/core/testing';

import { HomeService } from './home.service';
import {defer} from 'rxjs';
import {Status} from '../shared/models/introduction';
import {Link} from '../shared/models/link';

const introMock = {
  id : 1,
  firstname :  'Lucie',
  lastname :  'Macdonie',
  imageUrl :  'assets/images/lucie.jpg',
  birthDate :  '10/09/1985',
  gender:  'W',
  email:  'lucie.macdonie@gmail.com',
  status: Status.AVAILABLE,
  description:  'I am a professional tiger wrestler. I wrestled the biggest Siberian Tigers for the ' +
    'opening act at the Awesome and Dangerous Circus.',
  links : [
    new Link('', './assets/images/linkedin.png'),
    new Link('', './assets/images/github.png'),
    new Link('', './assets/images/codepen.png')],
  experience: 11
};
const homeServiceMock = {
  getIntroduction(id: number) {
    return introMock;
  }
};

describe('HomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: HomeService, useValue: homeServiceMock}]
    });
  });

  it('should be created', inject([HomeService], (service: HomeService) => {
    expect(service).toBeTruthy();
  }));

  it('should get introduction', inject([HomeService], (service: HomeService) => {
    expect(service.getIntroduction(1)).toEqual(null);
  }));
});
