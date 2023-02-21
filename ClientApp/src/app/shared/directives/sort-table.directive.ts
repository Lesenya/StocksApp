import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSortTable]'
})
export class SortTableDirective {
  private sortOder = 1;
  private collator = new Intl.Collator();
  @Input() appSortTable: Array<any>;
  constructor(private renderer: Renderer2, private targetElem: ElementRef) { }

  @HostListener("click")
  sortData() {
    const elem = this.targetElem.nativeElement;
    const sortIconElements = elem.parentNode.querySelectorAll('i');

    const order = elem.getAttribute("data-order");
    const property = elem.getAttribute("data-name");
    const sortUpIcon = 'fa-arrow-up-wide-short';
    const sortDownIcon = 'fa-arrow-down-wide-short';

    this.appSortTable.sort(this.doSort(property, order));
    sortIconElements.forEach(sortIconElem => {
      this.renderer.removeClass(sortIconElem, sortUpIcon);
      this.renderer.removeClass(sortIconElem, sortDownIcon);
    });

    if (order == "desc") {
      elem.setAttribute("data-order", "asc");
      this.renderer.addClass(elem.querySelector('i'), sortDownIcon);
    } else {
      elem.setAttribute("data-order", "desc");
      this.renderer.addClass(elem.querySelector('i'), sortUpIcon);
    }
  }

  private doSort(property, order) {
    if (order == "desc")
      this.sortOder = -1;
    else
      this.sortOder = 1;

    return (a, b) => {
      return this.collator.compare(a[property], b[property]) * this.sortOder;
    }
  }

}
