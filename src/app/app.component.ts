import { Component, OnInit } from '@angular/core';
import { PageOne } from './PageDefinition/page1';
import { test } from './model/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  model = new test("testing", 1,false);
  page = new PageOne(this.model.testModel,this.model.test2,() => this.save());

  save(){
    console.log(this.page)
  }


  ngOnInit(): void {
    // setInterval(() => console.log(this.model),100)
  }
}
