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
  ]
  constructor() { 
    this.loadingDiv = document.createElement("div");
    this.loadingDiv.setAttribute("style", this.styles.join(''));
    document.body.appendChild(this.loadingDiv);
  }

  start(){
    this.loadingDiv.style.display = 'block';
  }

  stop(){
    this.loadingDiv.style.display = 'none';
  }
}
