import { Component, OnInit, ElementRef, ViewChild, } from "@angular/core";
import { GuideStatesService } from "../guide-states.service";
import { Clipboard } from "@angular/cdk/clipboard"
import {ClipboardModule} from '@angular/cdk/clipboard';
import { DomSanitizer } from '@angular/platform-browser';
import {content} from '../content/index';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript',javascript);

@Component({
  selector: "app-guide",
  templateUrl: "./guide.component.html",
  styleUrls: ["./guide.component.css"]
})
export class GuideComponent implements OnInit {
  @ViewChild('autoScrollDiv') autoScrollDiv: ElementRef;

  currentStep = 0;
  content = content;

  constructor(public guideStates: GuideStatesService, private sanitizer: DomSanitizer) {}
  ngOnInit() {}

  get currentContent() {
    return this.sanitizer.bypassSecurityTrustHtml(this.content[this.currentStep]);
  }
  backPage(){
	this.currentStep = this.currentStep-1;
	if (this.currentStep < 0){
		this.currentStep = 0;
	}
    this.autoScrollDiv.nativeElement.scrollTop = 0;
  }
  nextPage(){
    this.currentStep = this.currentStep+1;
	this.autoScrollDiv.nativeElement.scrollTop = 0;
  }

}
