// src/app/services/contentful.service.ts
import { Injectable } from '@angular/core';
import {
  createClient,
  type ContentfulClientApi,
  type Entry,
} from 'contentful';
import { environment } from '../environments/environment';
import { isDevMode } from '@angular/core';
import { map } from 'rxjs';

const cfg = {
  space: environment.contentful.spaceId,
  accessToken: environment.contentful.accessToken
};
// client: no all-locales modifier ⇒ <undefined>
const client = createClient({
  space: environment.contentful.spaceId,
  accessToken: environment.contentful.accessToken,
  environment: environment.contentful.environmentId ?? 'master'
});

@Injectable({ providedIn: 'root' })
export class ContentfulService {
  /** v10 types expect a generic; <undefined> is the default chain modifier */
  private client: ContentfulClientApi<undefined> = createClient(cfg);

  params: Parameters<ContentfulClientApi<undefined>['getEntries']>[0] = {
    content_type: 'event',
    'fields.date[gte]': new Date().toISOString(),
    order: ['fields.date'],
    limit: 50
  };



  getEvents(query?: object): Promise<Entry<any>[]> {
    if (isDevMode()) {
      console.log('[Contentful] calling getEntries ...'); // full response
      // or: console.table(res.items.map(i => ({ id: i.sys.id, title: i.fields.title })));
    }
    return this.client.getEntries(Object.assign({
      content_type: environment.contentful.contentTypeIds.event
    }, query))
      .then(res => {
        if (isDevMode()) {
          console.log('[Contentful] getEntries response:', res); // full response
          // or: console.table(res.items.map(i => ({ id: i.sys.id, title: i.fields.title })));
        }
        return res.items;
      })
      .catch(err => {
        console.error('[Contentful] getEntries error:', err);
        throw err;
      });
  }

}
