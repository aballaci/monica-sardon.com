import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactsComponent {
  model = { email: '', message: '' };
  sent = false;

  submit(form: any) {
    if (!form.valid) return;
    this.sent = true;
    // TODO: replace with your real send (email API / backend)
    console.log('Contact form:', this.model);
  }
}
