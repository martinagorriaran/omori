import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AubreyComponent } from './characters/aubrey/aubrey.component';
import { EnemiesComponent } from './characters/enemies/enemies.component';
import { HeroComponent } from './characters/hero/hero.component';
import { HomeComponent } from './characters/home/home.component';
import { KelComponent } from './characters/kel/kel.component';
import { MaincharactersComponent } from './characters/maincharacters/maincharacters.component';
import { SupportingcastComponent } from './characters/supportingcast/supportingcast.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: 'hero',component: HeroComponent},
  {path: 'kel',component: KelComponent},
  {path: 'aubrey',component: AubreyComponent},
  {path: 'home', component: HomeComponent},
  {path: 'main-characters', component:MaincharactersComponent},
  {path: 'supporting-cast', component:SupportingcastComponent},
  {path:'enemies', component:EnemiesComponent},
  {path:'login',component:LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
