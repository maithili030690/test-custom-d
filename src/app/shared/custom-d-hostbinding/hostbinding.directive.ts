import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective implements OnInit{
@Input()hoverColor ! :string
@Input()defaultColor! :string
  constructor() { }

  @HostBinding("style.backgroundColor")bgColor :string =this.defaultColor

  ngOnInit(): void {
   this.bgColor =this.defaultColor
  }

  @HostListener('mouseover')
  onMouseOver(){
    this.bgColor = this.hoverColor
  }

 @HostListener('mouseout')
 onMouseOut(){
  this.bgColor = this.defaultColor
 }



}
