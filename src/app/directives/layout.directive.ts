import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subscription} from "rxjs";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {ScreenSize} from "../interfaces/screen-size";

@Directive({
  selector: '[ngLayout]'
})
export class LayoutDirective implements OnInit, OnDestroy {
  private screenSize: ScreenSize | null = null;
  private subscription = new Subscription();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private breakpointObserver: BreakpointObserver
  ) {}

  @Input() set ngLayout(screenSize: ScreenSize) {
    this.screenSize = screenSize;
  }

  ngOnInit(): void {
    if (!this.screenSize || !this.screenSize.breakpoint) {
      throw new Error('El atributo ngLayout requiere un objeto ScreenSize válido.');
    }

    const subscription = this.breakpointObserver
      .observe([this.screenSize.breakpoint])
      .subscribe((state: BreakpointState) => {
        this.toggleView(state.matches);
      });

    this.subscription.add(subscription);
  }

  private toggleView(show: boolean): void {
    this.viewContainer.clear();
    if (show) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
