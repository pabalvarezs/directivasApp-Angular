import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
