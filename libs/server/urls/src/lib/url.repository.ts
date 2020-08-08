import { EntityRepository } from 'typeorm';

import { BaseRepository } from '@srts.pw/server/common/typeorm';

import { Url } from './url.entity';

@EntityRepository(Url)
export class UrlRepository extends BaseRepository<Url> {}
