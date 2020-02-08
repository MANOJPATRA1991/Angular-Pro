import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'appTooltip'
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement('div');
  visible = false;

  @Input()
  set appTooltip(value) {
    this.tooltipElement.textContent = value;
  }

  hide() {
    this.tooltipElement.classList.remove('tooltip-active');
  }

  show() {
    this.tooltipElement.classList.add('tooltip-active');
  }
  constructor(
    private element: ElementRef
  ) { }

  ngOnInit() {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
  }

}