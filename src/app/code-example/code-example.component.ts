import { Component} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css'],
})
  export class CodeExampleComponent{

  constructor(private sanitizer: DomSanitizer) {}

  private clicksCt = 0;

  copyCode() {
    this.clicksCt++;
  }

}