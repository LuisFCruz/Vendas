import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class FormService {

  constructor() { }

  checarValidacao(formGroup: FormGroup) {
    Object.keys(formGroup.value).map((key) => {

      const control = formGroup.get(key);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.checarValidacao(control);
      }
    });
  }

}
