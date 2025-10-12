// pipes/richtext.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Document } from '@contentful/rich-text-types';

@Pipe({ name: 'richtext', standalone: true })
export class RichtextPipe implements PipeTransform {
  constructor(private san: DomSanitizer) {}
  transform(doc: unknown): SafeHtml {
    if (!doc || typeof doc !== 'object') return '';
    // very light type guard
    if ((doc as any).nodeType !== 'document') return '';
    const html = documentToHtmlString(doc as Document);
    return this.san.bypassSecurityTrustHtml(html);
  }
}
