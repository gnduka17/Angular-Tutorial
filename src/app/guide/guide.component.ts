import { Component, OnInit } from '@angular/core';
import {GuideStatesService} from '../guide-states.service'

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor(public guideStates: GuideStatesService ) { }

  ngOnInit() {
    // window.scroll(0, 0);
  }
//   onActivate(event) {
//     window.scroll(0,0);
//     //or document.body.scrollTop = 0;
//     //or document.querySelector('body').scrollTo(0,0)
// }

}