import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{
  
  htmlElement : ElementRef<HTMLElement>;
  @Input() color : string = 'blue';
  @Input() mensaje : string = "Debe ingresar este campo";

  constructor( private element : ElementRef<HTMLElement>) {
    this.htmlElement = element;
  }
  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }
  setColor () :void{
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text')
  }
  setMensaje () :void{
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
