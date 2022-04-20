import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KelComponent } from './characters/kel/kel.component';
import { HeroComponent } from './characters/hero/hero.component';
import { AubreyComponent } from './characters/aubrey/aubrey.component';
import { HomeComponent } from './characters/home/home.component';
import { EnemiesComponent } from './characters/enemies/enemies.component';
import { SupportingcastComponent } from './characters/supportingcast/supportingcast.component';
import { MaincharactersComponent } from './characters/maincharacters/maincharacters.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    KelComponent,
    HeroComponent,
    AubreyComponent,
    HomeComponent,
    EnemiesComponent,
    SupportingcastComponent,
    MaincharactersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
