import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario={
    password:'',
    email:''
  }
  ingresar(){
    console.log(this.usuario);
  }

}
