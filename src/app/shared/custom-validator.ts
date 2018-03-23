import { FormControl } from "@angular/forms";

export class CustomValidator {

  constructor() { }

  private static _cpf(value) {
    let invalidCpf = ['00000000000',
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999"];
    let cpf = value.replace(/[^\d]+/g, '');
    if (!cpf || cpf.length !== 11 || invalidCpf.includes(cpf)) return false;

    let add = 0;
    let rev = 0;

    for (let i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return false;

    add = 0;
    for (let i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return false;

    return true;

  }

  private static _cnpj(value) {
    let invalidCnpj = [
      "00000000000000", 
      "11111111111111", 
      "22222222222222", 
      "33333333333333", 
      "44444444444444", 
      "55555555555555", 
      "66666666666666", 
      "77777777777777", 
      "88888888888888", 
      "99999999999999"];
    let cnpj = value.replace(/[^\d]+/g,'');
 
    if(!cnpj || cnpj.length !== 14 || invalidCnpj.includes(cnpj)) return false;

    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0,tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
  }

  static cpf(control: FormControl) {
    if (!control.value) return null;

    return CustomValidator._cpf(control.value) ? null : { validCpf: true };
  }

  static cnpj(control: FormControl) {
    if (!control.value) return null;
    return CustomValidator._cnpj(control.value) ? null : { validCnpj: true };
  }

  static cpfCnpj(control: FormControl) {
    let isValid = true;
    if (!control.value) return null;

    switch(control.value.length) {
      case 11:
        isValid = CustomValidator._cpf(control.value);
        break;
      case 14:
        isValid = CustomValidator._cnpj(control.value);
        break;
    }
    
    isValid = control.value.length

    return isValid ? null : { validCpfCnpj: true };
  }

}
