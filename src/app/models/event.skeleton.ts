// models/event.skeleton.ts
import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export interface EventSkeleton extends EntrySkeletonType {
  contentTypeId: 'event';
  fields: {
    date: EntryFieldTypes.Date;
    title: EntryFieldTypes.Text;
    location?: EntryFieldTypes.Location;
    description?: EntryFieldTypes.RichText; // <- this narrows to Document
  };
}
