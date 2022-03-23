import { Component, OnInit } from '@angular/core';
import { LoginModel } from './core/models/login.model';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titles: Array<string> = ['barra de navegacion', 'Menu', 'principal', 'publicidad', 'pie pagina'];

  constructor(private readonly loginService: LoginService) { }

  ngOnInit(): void {
    console.log(this.titles, ' Variable');
  }

  onClickEvent(login: LoginModel): void {
    console.log('Informacion en app: ', login);
    const result = this.loginService.save(login);
    console.log(result);
  }
}
