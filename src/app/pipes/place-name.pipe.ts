import { Pipe, PipeTransform } from '@angular/core';

export interface Place { lat: number; lon: number; name?: string | null; }

@Pipe({ name: 'placeName', standalone: true })
export class PlaceNamePipe implements PipeTransform {
  transform(place: Place | null | undefined, precision = 4): string {
    if (!place || typeof place.lat !== 'number' || typeof place.lon !== 'number') return '';
    if (place.name && place.name.trim()) return place.name.trim();
    return `${place.lat.toFixed(precision)}, ${place.lon.toFixed(precision)}`;
  }
}
