import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// lib
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { PublicityComponent } from './components/publicity/publicity.component';
import { FooterComponent } from './components/footer/footer.component';


// services
import { LoginService } from './shared/services/login.service';
import { TestService } from './shared/services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuComponent,
    MainComponent,
    PublicityComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
