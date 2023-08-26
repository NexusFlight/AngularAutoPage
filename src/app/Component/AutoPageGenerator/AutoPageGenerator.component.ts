import { Component, Input, OnInit } from '@angular/core';
import {
  TextInput,
  NumberInput,
  Checkbox,
} from 'src/app/Decorator/DisplayType';

@Component({
  selector: 'app-AutoPageGenerator',
  templateUrl: './AutoPageGenerator.component.html',
  styleUrls: ['./AutoPageGenerator.component.css'],
})
export class AutoPageGeneratorComponent implements OnInit {
  TextInput = TextInput;
  NumberInput = NumberInput;
  Checkbox = Checkbox;

  properties: any[] = [];

  @Input() model: any;

  constructor() {}

  ngOnInit() {
    Object.keys(this.model).forEach((element) => {
      this.properties.push({
        key: element,
        display: this.keyConverter(element),
        value: this.model[element],
      });
    });
  }

  keyConverter(value: string) {
    let newString = [];
    newString.push(value[0].toUpperCase());
    for (let i = 1; i < value.length; i++) {
      const element = value[i];
      if (element === element.toUpperCase() || !isNaN(+element)) {
        newString.push(' ');
      }
      newString.push(element);
    }
    return newString.join('');
  }

  isTypeOf(item: any, type: any) {
    return type.isAutoType(item);
  }

  change(key: string, event: any) {


    if (isNaN(+event) || event === true || event === false) {
      this.model[key] = event;
      return;
    }

    this.model[key] = Number(event);
  }
}
