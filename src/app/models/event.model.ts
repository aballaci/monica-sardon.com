// src/app/models/event.model.ts
import type { Document } from '@contentful/rich-text-types';

export interface EventFields {
  date: string;                       // ISO date string from Contentful
  title: string;
  location?: { lat: number; lon: number }; // Contentful "Location"
  description?: Document;             // RichText
}
