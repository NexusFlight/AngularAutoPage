import { Component, Input, OnInit } from '@angular/core';
import { NumberInput, SaveButton, TextInput } from 'src/app/Decorator/DisplayType';

@Component({
  selector: 'app-PageGenerator',
  templateUrl: './PageGenerator.component.html',
  styleUrls: ['./PageGenerator.component.css']
})
export class PageGeneratorComponent{
  TextInput = TextInput;
  NumberInput = NumberInput;
  SaveButton = SaveButton;

  @Input() set page(value:any){
     this.properties = Object.values(value)

  };

  properties: any[] = [];

  isTypeOf(item:any, type:any){
    if(item.isType)
      return item.isType(type.type);

    return false
  }

}
