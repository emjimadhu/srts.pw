import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UrlsRepository } from '../../urls.repository';
import { Urls } from '../../urls.entity';

@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(UrlsRepository)
    private readonly urlsRepository: UrlsRepository
  ) {}

  public listRead(): Promise<Urls[]> {
    return this.urlsRepository.find();
  }
}
