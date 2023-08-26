import { NumberInput, SaveButton, TextInput } from "../Decorator/DisplayType";

export class PageOne{
  test: TextInput;
  test1: NumberInput;
  save: SaveButton;



  constructor(val1: string, val2:number, save: Function){
    this.test = new TextInput("test", val1);
    this.test1 = new NumberInput("Not a test", val2);
    this.save = new SaveButton("save!",save)
  }
}
