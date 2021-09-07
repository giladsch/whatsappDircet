import { Component, HostListener, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import isMobile from 'is-mobile';
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input';

const hiddenSymbol = '0000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  @ViewChild('f') form: FormControl;
  const;
  desktopLink = `https://web.whatsapp.com/send?phone=${hiddenSymbol}&text&app_absent=0/`;
  mobileLink = 'https://wa.me/';
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
    if (this.form.valid) {
      const url = this.getLink(this.form.value.phone.e164Number);
      debugger;
      window.open(url, '_blank');
    }
  }

  getLink(phoneNumber: string): string {
    return isMobile({ tablet: true, featureDetect: true })
      ? `${this.mobileLink}${phoneNumber}`
      : this.desktopLink.replace(`${hiddenSymbol}`, `${phoneNumber}`);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key.toLocaleLowerCase() == 'enter') {
      this.open();
    }
  }
}
