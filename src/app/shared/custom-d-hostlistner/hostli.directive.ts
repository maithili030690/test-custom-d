import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostli]'
})
export class HostliDirective implements OnInit {

  constructor(
    private _eleRef :ElementRef,
    private _renderer :Renderer2
  ) { }

  ngOnInit(): void {
   
  }

  @HostListener('mouseover')
  onMouseOver(){
    console.log('host-listner works')
    this._renderer.setStyle(this._eleRef.nativeElement,"background-color","orange")

  }

  @HostListener('mouseout')
  onMouseOut(){
    this._renderer.setStyle(this._eleRef.nativeElement,"background-color","transparent")
  }


}
