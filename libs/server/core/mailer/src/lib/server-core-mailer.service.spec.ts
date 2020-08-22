import { Test } from '@nestjs/testing';

import { ServerCoreMailerService } from './server-core-mailer.service';

describe('ServerCoreMailerService', () => {

  let service: ServerCoreMailerService;

  beforeEach(async() => {
    const module = await Test.createTestingModule({
      providers: [ServerCoreMailerService]
    }).compile();

    service = module.get(ServerCoreMailerService);
  });

  it('should be defined', () => {
    expect.assertions(1);
    expect(service).toBeTruthy();
  });

});
