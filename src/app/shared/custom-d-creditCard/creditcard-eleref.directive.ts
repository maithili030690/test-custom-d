import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreditcardEleref]'
})
export class CreditcardElerefDirective implements OnInit {

  constructor(
    private _eleRef :ElementRef
  ) { }

  ngOnInit(): void {
    this.createErrorContainer()
  }

  @HostListener('keyup',['$event'])
  validateCreditCard(eve:Event){
    let inputControl = eve.target as HTMLInputElement

    let val :string = inputControl.value.replace(/\s+/g,'')
    console.log(val)

    if(val.length >16){
      val = val.substring(0,16)
    }

    console.log(/[^\d]/.test(val))
    if(/[^\d]/.test(val)){
      console.log(inputControl.nextElementSibling)
      inputControl.nextElementSibling?.classList.remove('d-none')
    }else{
      inputControl.nextElementSibling?.classList.add('d-none')
    }

   let formatedVal = this.formateCreditCard(val)
    inputControl.value = formatedVal
  }

  //chunked Arr 
  formateCreditCard(data:string){
    let chunkedArr = []
    for(let i = 0; i < data.length; i+=4){
      chunkedArr.push(data.slice(i,i+4))
    }
    return chunkedArr.join(' ')
  }
createErrorContainer(){
  //para >> string
  let para = document.createElement('p')
  para.className ="text-danger d-none"
 para.innerHTML =`<strong>Please enter valid card details</strong>`


 this._eleRef.nativeElement.parentElement.append(para)
}

}
