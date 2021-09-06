import { Component, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  @ViewChild('f') form: FormControl;
  link = 'https://web.whatsapp.com/send?phone=&text&app_absent=0/';
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.Israel,
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  selectedCountryISO = this.preferredCountries[0] ?? CountryISO.Israel;

  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });

  open() {
    debugger;
    if (this.form.valid) {
      const url = this.getLink(this.form.value.phone.e164Number);
      window.open(url, '_blank');
    }
  }

  getLink(phoneNumber: string): string {
    return this.link.replace('send?phone=', `send?phone=${phoneNumber}`);
  }
}
