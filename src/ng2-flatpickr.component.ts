import {
  Component,
  forwardRef,
  input,
  viewChild,
  ElementRef,
  effect,
  output,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { FlatpickrOptions } from "./flatpickr-options.interface";
import { Ng2FlatpickrDirective } from "./ng2-flatpickr.directive";
import { debounceTime, Subject } from "rxjs";

declare var require: any;

if (typeof window !== "undefined") {
  require("flatpickr");
}

@Component({
  selector: "ng2-flatpickr",
  imports: [Ng2FlatpickrDirective, CommonModule],
  template: `
    <div class="ng2-flatpickr-input-container" #flatpickr>
      @if(!hideButton()){
      <input
        class="ng2-flatpickr-input"
        [ngClass]="addClass() || ''"
        [placeholder]="placeholder()"
        [tabindex]="tabindex()"
        type="text"
        (focus)="debouncedOnFocus($event)"
        data-input
      />
      }
      <ng-content></ng-content>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Ng2FlatpickrComponent),
      multi: true,
    },
  ],
})
export class Ng2FlatpickrComponent {
  public flatpickr: Object;
  private onFocusSubject: Subject<any> = new Subject();

  private defaultFlatpickrOptions: FlatpickrOptions = {
    wrap: true,
    clickOpens: true,
    onChange: (selectedDates: any) => {
      this.onChange.emit(selectedDates);
    },
  };

  flatpickrElement = viewChild.required<ElementRef>("flatpickr");

  config = input<FlatpickrOptions>();

  placeholder = input<string>("");

  addClass = input<string>("");

  setDate = input<string | Date>();

  tabindex = input<number>(0);

  hideButton = input<boolean>(false);

  onChange = output<any>();

  onFocus = output<any>();

  ///////////////////////////////////

  constructor() {
	this.onFocusSubject.pipe(debounceTime(300)).subscribe((event: any) => {
		this.onFocus.emit(event);
	});
	
    effect(() => {
      if (
        this.flatpickrElement().nativeElement &&
        this.flatpickrElement().nativeElement._flatpickr
      ) {
        this.setDateFromInput(this.setDate());
      }
    });

    effect(() => {
      if (
        this.flatpickrElement().nativeElement &&
        this.flatpickrElement().nativeElement._flatpickr
      ) {
        if (this.config().altInput) {
          this.setAltInputPlaceholder(this.placeholder());
        }
      }
    });
  }

  ///////////////////////////////////

  ngAfterViewInit() {
    if (this.config()) {
      Object.assign(this.defaultFlatpickrOptions, this.config());
    }
    if (this.flatpickrElement().nativeElement.flatpickr) {
      this.flatpickr = this.flatpickrElement().nativeElement.flatpickr(
        this.defaultFlatpickrOptions
      );
    }
    if (this.setDate()) {
      this.setDateFromInput(this.setDate());
    }
  }

  setDateFromInput(date: any) {
    this.flatpickrElement().nativeElement._flatpickr.setDate(date, true);
  }

  setAltInputPlaceholder(placeholder: string) {
    this.flatpickrElement().nativeElement._flatpickr.altInput.setAttribute(
      "placeholder",
      placeholder
    );
  }

  debouncedOnFocus(event: any) {
	this.onFocusSubject.next(event);
}

}
