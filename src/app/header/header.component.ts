import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppHeaderComponent {
  name = 'Mónica Sardón Hidalgo';
  roles = 'Violinistin | Veranstalterin | Pädagogin';
  locale: 'es' | 'de' = 'de'; // or grab from your i18n service / localStorage
  setLocale(l: 'es'|'de') { this.locale = l; /* TODO: trigger your i18n change */ }
}
