import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bio',
  standalone: true,
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {
  @Input() imageSrc = 'assets/bio-monica.jpg';
  @Input() imageAlt = 'Mónica Sardón Hidalgo';
  @Input() credit = '© Anna Dorokhova';

  @Input() title = 'BIO';
  // You can also project content via <ng-content>, but simple inputs keep it tidy.
}

