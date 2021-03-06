import { Component, OnInit, ElementRef, ViewChild, } from "@angular/core";
import { GuideStatesService } from "../guide-states.service";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { content } from '../content/index';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

@Component({
  selector: "app-guide",
  templateUrl: "./guide.component.html",
  styleUrls: ["./guide.component.css"]
})
export class GuideComponent implements OnInit {
  @ViewChild('autoScrollDiv') autoScrollDiv: ElementRef;
  // @ViewChild('expandableDiv') expandableDiv: ElementRef;

  currentStep = 0;
  expand = true;
  content = content;
  currentContent: SafeHtml;

  getCurrentContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      this.content[this.currentStep]
    );
  }

  constructor(public guideStates: GuideStatesService, private sanitizer: DomSanitizer) { this.updateContent(); }
  ngOnInit() { }
  updateContent() {
    this.currentContent = this.getCurrentContent();

  }
  backPage() {
    this.currentStep = this.currentStep - 1;
    if (this.currentStep < 0) {
      this.currentStep = 0;
    }
    this.autoScrollDiv.nativeElement.scrollTop = 0;
    this.updateContent();
  }
  nextPage() {
    this.currentStep = this.currentStep + 1;
    this.autoScrollDiv.nativeElement.scrollTop = 0;
    this.updateContent();
  }
  expandBox(){
    if(this.expand){
      this.autoScrollDiv.nativeElement.style.height=400+'px';
    }
    else{
      this.autoScrollDiv.nativeElement.style.height=220+'px';
    }
    this.expand=!this.expand;
    
  }
}



