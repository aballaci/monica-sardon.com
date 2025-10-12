// src/app/utils/richtext.ts
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Document } from '@contentful/rich-text-types';

export function renderRichText(doc?: Document): string {
  return doc ? documentToHtmlString(doc, {
    // allow only your schema’s enabled node types; add custom renderers as needed
  }) : '';
}
