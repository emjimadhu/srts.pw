import { EntityRepository } from 'typeorm';

import { BaseRepository } from '@srts.pw/server/common/typeorm';

import { Urls } from './urls.entity';

@EntityRepository(Urls)
export class UrlsRepository extends BaseRepository<Urls> {}
