import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPropertyBinding]'
})
export class PropertyBindingDirective {
@Input()hoverColor!:string
  constructor(
    private _eleRef :ElementRef,
    private _renderer:Renderer2
  ) { }
@HostListener('mouseover')
onMouseOver(){
  this._renderer.setStyle(this._eleRef.nativeElement,"background-color",this.hoverColor)

}
@HostListener('mouseout')
onMouseOut(){
  this._renderer.setStyle(this._eleRef.nativeElement,"background-color","transparent")
}
}
