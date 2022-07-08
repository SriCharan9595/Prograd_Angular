import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reg-login',
  templateUrl: './reg-login.component.html',
  styleUrls: ['./reg-login.component.css']
})
export class RegLoginComponent{
  regDisp(data:any)
  {
    console.warn(data)
  }
}
