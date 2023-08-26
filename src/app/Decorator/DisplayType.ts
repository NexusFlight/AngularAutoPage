import { Type } from '@angular/compiler';

export class TextInput {
  static type = TextInput.name;

  constructor(
    public label: string,
    public value: string,
  ) {}

  static isAutoType(val: string) {
    return typeof val == typeof "";
  }

  isType(val: string) {
    return val == TextInput.type;
  }
}

export class NumberInput {
  static type = NumberInput.name;

  constructor(
    public label: string,
    public value: number,
  ) {}

  static isAutoType(val: string) {
    return typeof val == typeof 1;
  }

  isType(val: string) {
    return val == NumberInput.type;
  }
}

export class Checkbox {
  static type = Checkbox.name;

  constructor(
    public label: string,
    public value: Function,
  ) {}


  static isAutoType(val: string) {
    return typeof val == typeof true;
  }

  isType(val: string) {
    return val == Checkbox.type;
  }
}


export class SaveButton {
  static type = SaveButton.name;

  constructor(
    public label: string,
    public value: Function,
    public buttonClasses = ''
  ) {}

  isType(val: string) {
    return val == SaveButton.type;
  }
}
