import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DWithRendererDirective } from './shared/test-custom-directives-csshightlighter/d-with-renderer.directive';
import { DWoRendererDirective } from './shared/test-custom-directives-csshightlighter/d-wo-renderer.directive';
import { HostliDirective } from './shared/custom-d-hostlistner/hostli.directive';
import { HostbindingDirective } from './shared/custom-d-hostbinding/hostbinding.directive';
import { PropertyBindingDirective } from './shared/custom-d-property-binding/property-binding.directive';
import { LowerCEleRefDirective } from './shared/custom-d-lowercase-eleref/lower-c-ele-ref.directive';
import { LowCEventBindingDirective } from './shared/custom-d-event-binding/low-c-event-binding.directive';
import { CreditcardElerefDirective } from './shared/custom-d-creditCard/creditcard-eleref.directive';



@NgModule({
  declarations: [
    AppComponent,
    DWithRendererDirective,
    DWoRendererDirective,
    HostliDirective,
    HostbindingDirective,
    PropertyBindingDirective,
    LowerCEleRefDirective,
    LowCEventBindingDirective,
    CreditcardElerefDirective

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
