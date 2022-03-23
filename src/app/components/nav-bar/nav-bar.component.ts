import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
    console.log('navegacion', this.title);

  }

}
