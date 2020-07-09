import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { GuideComponent } from '../guide/guide.component';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
// export class CodeExampleComponent extends HTMLElement{
  export class CodeExampleComponent implements AfterViewInit{
    @ViewChild(GuideComponent) guide:GuideComponent;

  constructor() {
    // super();
  }
  text:string;

  ngAfterViewInit() {
    this.text = this.guide.text;
  }
  private clicksCt = 0;

  copyCode() {
    this.clicksCt++;
    console.log("hey i clicked button");
    console.log(this.text);
  }

}