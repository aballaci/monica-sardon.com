import { Component, Input } from '@angular/core';

@Component({
  selector: 'photo-banner',
  standalone: true,
  template: `
    <div class="photo-banner">
      <img [src]="src" [alt]="alt" loading="lazy" decoding="async" />
    </div>
  `,
  styles: [`
    .photo-banner {
      background-color: #111;       /* dark fill around image */
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 100%;
    }
    .photo-banner img {
      display: block;
      width: auto;
      max-width: 1200px;  /* natural image width */
      height: auto;
      object-fit: contain;          /* keeps full image visible */
    }
    /* remove top/bottom gaps relative to neighbor sections */
    :host { display: block; margin: 0; padding: 0; }
  `]
})
export class PhotoBannerComponent {
  @Input() src = 'https://files.builder.misssite.com/08/6a/086a5050-24e4-4af7-9110-e21b37576255.jpg';
  @Input() alt = 'Mónica Sardón Hidalgo performing';
}
