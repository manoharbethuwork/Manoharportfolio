import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { timeout } from 'rxjs';
import { CONTACT_EMAIL } from '../../../../data/portfolio.data';
import { ContactRequest } from '../../../../models/contact-request.model';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, SectionHeading],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

export class Contact {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly http = inject(HttpClient);

  /* Web3Forms access key. It is meant to be public (it only allows sending TO your inbox). */
  private readonly accessKey = '62d4420e-ff36-4660-a582-c457dfce939d';
  private readonly endpoint = 'https://api.web3forms.com/submit';

  protected readonly email = CONTACT_EMAIL;
  protected readonly status = signal<SubmitStatus>('idle');

  protected readonly form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    botcheck: [false], // hidden spam trap: real visitors never see or tick it
  });

  protected isInvalid(field: keyof ContactRequest): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }

  protected onSubmit(): void {
    if (this.status() === 'sending') {
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const request = this.form.getRawValue();
    this.status.set('sending');

    const payload = {
      ...request,
      access_key: this.accessKey,
      from_name: 'Portfolio Contact Form',
      subject: `Portfolio message: ${request.subject}`,
    };

    this.http
      .post<Web3FormsResponse>(this.endpoint, payload)
      .pipe(timeout(15000))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.form.reset();
            this.status.set('sent');
          } else {
            this.status.set('error');
          }
        },
        error: () => this.status.set('error'),
      });
  }
}
