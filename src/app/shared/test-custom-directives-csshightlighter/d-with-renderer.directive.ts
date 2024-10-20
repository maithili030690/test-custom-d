import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDWithRenderer]'
})
export class DWithRendererDirective implements OnInit{

  constructor(
    private _eleRef :ElementRef,
    private _rederer :Renderer2
  ) { }

  ngOnInit(): void {
    this._rederer.setStyle(this._eleRef.nativeElement,"backgroundColor","orange")
    this._rederer.setStyle(this._eleRef.nativeElement,"color","#fff")
    this._rederer.setStyle(this._eleRef.nativeElement,"padding","10px")

    // this._rederer.addClass(this._eleRef.nativeElement,"alert")
    // this._rederer.addClass(this._eleRef.nativeElement,"alert-info")

    
  }

}
