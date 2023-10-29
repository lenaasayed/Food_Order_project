import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  //we could also used *ngIf instead ^^
  @Input()
  visible = false;
  @Input()
  notFoundMessage = "Nothing Found";
  @Input()
  resetLinkText = "Reset";
  @Input()
  resetLinkRout = "/";


  constructor() { }

  ngOnInit(): void {
  }

}
