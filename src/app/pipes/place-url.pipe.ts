import { Pipe, PipeTransform } from '@angular/core';
import { Place } from './place-name.pipe';

type Provider = 'google' | 'osm';

@Pipe({ name: 'placeUrl', standalone: true })
export class PlaceUrlPipe implements PipeTransform {
  transform(place: Place | null | undefined, provider: Provider = 'google', zoom = 15): string {
    if (!place || typeof place.lat !== 'number' || typeof place.lon !== 'number') return '';
    const { lat, lon, name } = place;

    if (provider === 'osm') {
      return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`;
    }

    // Google Maps: prefer accurate coords; append name as a label if provided
    const label = name && name.trim() ? ` (${encodeURIComponent(name.trim())})` : '';
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lon}${label}`;
  }
}
