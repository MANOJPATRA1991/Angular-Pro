import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMyFor][appMyForOf]'
})
export class MyForDirective {
  @Input()
  set appMyForOf(collection) {
    this.view.clear();

    console.log(collection);

    collection.forEach((item, index) => {
      this.view.createEmbeddedView(
        this.template, {
          $implicit: item,
          index
        })
    })
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

}