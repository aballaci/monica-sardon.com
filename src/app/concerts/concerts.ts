// src/app/concerts/concerts.ts
import { Component, computed, isDevMode, OnInit, signal } from '@angular/core';
import type { Entry } from 'contentful';
import { ContentfulService } from '../contentful';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { RichtextPipe } from '../pipes/richtext.pipe';
import type { Document } from '@contentful/rich-text-types';
import { PlaceNamePipe } from '../pipes/place-name.pipe';
import { PlaceUrlPipe } from '../pipes/place-url.pipe';

@Component({
  selector: 'app-concerts',
  imports: [DatePipe, RichtextPipe, UpperCasePipe],
  standalone: true,
  styleUrls: ['./concerts.scss'],
  templateUrl: './concerts.html',
})
export class ConcertsComponent implements OnInit {
  readonly events = signal<Entry<any>[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly hasEvents = computed(() => this.events().length > 0 && !this.loading());


  constructor(private cf: ContentfulService) { }

  startOfTodayUTC(): string {
    const now = new Date();
    const y = now.getUTCFullYear();
    const m = now.getUTCMonth();
    const d = now.getUTCDate();
    return new Date(Date.UTC(y, m, d, 0, 0, 0)).toISOString(); // e.g. 2025-10-12T00:00:00.000Z
  }



  asDoc = (v: unknown) => (v && typeof v === 'object' && (v as any).nodeType === 'document')
    ? (v as Document) : undefined;

  async ngOnInit() {
    try {
      this.loading.set(true);
      const items = await this.cf.getEvents({
        'fields.date[gte]': this.startOfTodayUTC(), // 👈 same as &fields.date[gte]=...Z
        content_type: 'event',                  // usually your method sets this already
        order: ['fields.date']                  // optional: sort ascending by date
      });
      if (isDevMode()) console.log('[UI] events:', items);
      this.events.set(items);
    } catch (e: any) {
      this.error.set(e?.message ?? String(e));
    } finally {
      this.loading.set(false);
    }
  }
}
