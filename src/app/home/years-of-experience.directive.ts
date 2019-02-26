import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appYearsOfExperience]'
})
export class YearsOfExperienceDirective implements OnInit {

  @Input() nbrOfYears: number;

  constructor(private el: ElementRef,  private renderer: Renderer2) {
  }

  ngOnInit() {
    if (this.nbrOfYears && this.nbrOfYears > 10) {
      const star = '<img mat-card-avatar width="20px" src="./assets/images/star.png">';
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', star);
    }
  }

}
