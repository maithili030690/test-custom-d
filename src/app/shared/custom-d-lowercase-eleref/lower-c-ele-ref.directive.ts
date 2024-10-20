import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLowerCEleRef]'
})
export class LowerCEleRefDirective {

  constructor(
    private _eleRef :ElementRef,
    private _renderer :Renderer2
  
  ) { }
// @HostListener('keyup')
// onKeyUp(){
//   let val =(this._eleRef.nativeElement.value as string).toLowerCase()
//   console.log(val)
//   this._eleRef.nativeElement.value = val
// }
@HostListener('keyup')
onKeyUp(){
  let inpval = (this._eleRef.nativeElement.value as string) 

  let val = inpval.toLowerCase()

  this._renderer.setProperty(this._eleRef.nativeElement,'value',val)
  console.log(val)
}

}
