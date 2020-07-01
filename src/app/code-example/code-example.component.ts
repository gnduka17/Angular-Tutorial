import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class CodeExampleComponent implements OnInit{

  constructor() { }

  ngOnInit() {
  }
  private clicksCt = 0;

  copyCode() {
    this.clicksCt++;
    console.log("hey i clicked button")
  }

}