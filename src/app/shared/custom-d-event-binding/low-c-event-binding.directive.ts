import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowCEventBinding]'
})
export class LowCEventBindingDirective {

  constructor() { }

  @HostListener('keyup',['$event'])
  onKeyUp(eve:Event){
    let inpVal =(eve.target as HTMLInputElement)

    let val =inpVal.value.toLowerCase()

    inpVal.value =val
    console.log(val)
  }


}
