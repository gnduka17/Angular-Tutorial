import { Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css'],
})
  export class CodeExampleComponent implements AfterViewInit{
    @ViewChild('testingDiv') testingDiv: ElementRef;

  constructor(private sanitizer: DomSanitizer) {}

  private clicksCt = 0;
  ngAfterViewInit() {}
  copyCode() {
    const selection = window.getSelection();
    // Save the current selection
    const currentRange = selection.rangeCount === 0
        ? null : selection.getRangeAt(0);

    // Select the text content of code element
    const range = document.createRange();
    range.selectNodeContents(this.testingDiv.nativeElement);
    selection.removeAllRanges();
    selection.addRange(range);
    
    // Copy to the clipboard
    try {
        document.execCommand('copy');
        console.log("Copied!!!!!")
    } catch (err) {
        // Unable to copy
        console.log("CANTTTT CopY!!!!!")
    } finally {
        // Restore the previous selection
        selection.removeAllRanges();
        currentRange && selection.addRange(currentRange);
    }
  }
  // Query the elements





}