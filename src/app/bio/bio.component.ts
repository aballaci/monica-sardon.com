import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bio',
  standalone: true,
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {
  @Input() imageSrc = 'https://files.builder.misssite.com/76/16/7616f64e-2c9c-4784-a7ea-7bfacd7e4c40.jpg';
  @Input() imageAlt = 'Mónica Sardón Hidalgo';
  @Input() credit = '© Anna Dorokhova';

  @Input() title = 'BIO';
  // You can also project content via <ng-content>, but simple inputs keep it tidy.
}

