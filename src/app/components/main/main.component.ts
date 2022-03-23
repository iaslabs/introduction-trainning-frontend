import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginModel } from 'src/app/core/models/login.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output() submitEvent = new EventEmitter<LoginModel>();

  user: string;
  pass: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(): void {
    const login: LoginModel = { user: this.user, pass: this.pass };
    this.submitEvent.emit(login);
  }

}
