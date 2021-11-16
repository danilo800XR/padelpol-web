import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingDiv : HTMLElement;
  private styles = [
    'display : none;',
    'position: fixed;',
    'inset: 0;',
    'background: url(assets/images/loading-padelpol.gif) center center rgba(0,0,0,0.5) no-repeat ;'
  ];
  //Usamos el contador para saber si hay más de una llamada que haya sido interceptada
  //y haya cargado el loading. COmo JS es asincrono, la primera que acabe hará el stop(), del loading
  //aunque haya otras llamadas ejecutándose, por lo que no se vería
  //Con el contador, controlamos las llamadas que han hecho el star() y cuando se vayan acabando, 
  //conmtrolamos cuando hacer el stop()
private count = 0;

  constructor() { 
    this.loadingDiv = document.createElement("div");
    this.loadingDiv.setAttribute("style", this.styles.join(''));
    document.body.appendChild(this.loadingDiv);
  }

  start(){
    this.count++;
    if(this.count == 1)
      this.loadingDiv.style.display = 'block';
  }

  stop(){
    //Controlamos, que si haya algun stop() puesto a mano de más, no quede el loading cargado
    if(this.count  > 0 )this.count--;
    if(this.count == 0)
      this.loadingDiv.style.display = 'none';
  }
}
