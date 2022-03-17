import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'store';

  getName():void {
    console.log('Primer linea de codigo en Agular');
  }
  

}
