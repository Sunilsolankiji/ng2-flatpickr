import * as i0 from '@angular/core';
import { forwardRef, Input, ViewChild, Component, EventEmitter, HostListener, Output, Directive } from '@angular/core';
import * as i1 from '@angular/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

if (typeof window !== "undefined") {
    require("flatpickr");
}
class Ng2FlatpickrComponent {
    flatpickr;
    _tabindex = 0;
    onTouchedFn = () => { };
    defaultFlatpickrOptions = {
        wrap: true,
        clickOpens: true,
        onChange: (selectedDates) => {
            this.writeValue(selectedDates);
        },
    };
    flatpickrElement;
    config;
    placeholder = "";
    addClass = "";
    setDate;
    get tabindex() {
        return this._tabindex;
    }
    set tabindex(ti) {
        this._tabindex = Number(ti);
    }
    hideButton = false;
    ///////////////////////////////////
    writeValue(value) {
        this.propagateChange(value);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    propagateChange = (_) => { };
    ///////////////////////////////////
    setDateFromInput(date) {
        this.flatpickrElement.nativeElement._flatpickr.setDate(date, true);
    }
    setAltInputPlaceholder(placeholder) {
        this.flatpickrElement.nativeElement._flatpickr.altInput.setAttribute("placeholder", placeholder);
    }
    ngAfterViewInit() {
        if (this.config) {
            Object.assign(this.defaultFlatpickrOptions, this.config);
        }
        if (this.flatpickrElement.nativeElement.flatpickr) {
            this.flatpickr = this.flatpickrElement.nativeElement.flatpickr(this.defaultFlatpickrOptions);
        }
        if (this.setDate) {
            this.setDateFromInput(this.setDate);
        }
    }
    ngOnChanges(changes) {
        if (this.flatpickrElement.nativeElement &&
            this.flatpickrElement.nativeElement._flatpickr) {
            if (changes.hasOwnProperty("setDate") &&
                changes["setDate"].currentValue) {
                this.setDateFromInput(changes["setDate"].currentValue);
            }
            if (this.config.altInput &&
                changes.hasOwnProperty("placeholder") &&
                changes["placeholder"].currentValue) {
                this.setAltInputPlaceholder(changes["placeholder"].currentValue);
            }
        }
    }
    onFocus(event) {
        this.onTouchedFn();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: Ng2FlatpickrComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.2", type: Ng2FlatpickrComponent, isStandalone: true, selector: "ng2-flatpickr", inputs: { config: "config", placeholder: "placeholder", addClass: "addClass", setDate: "setDate", tabindex: "tabindex", hideButton: "hideButton" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => Ng2FlatpickrComponent),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "flatpickrElement", first: true, predicate: ["flatpickr"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: `
    <div class="ng2-flatpickr-input-container" #flatpickr>
		@if(!hideButton){
			<input
				class="ng2-flatpickr-input {{ addClass }}"
				[placeholder]="placeholder"
				[tabindex]="tabindex"
				type="text"
				(focus)="onFocus($event)"
				data-input
			/>
		}
      <ng-content></ng-content>
    </div>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: Ng2FlatpickrComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ng2-flatpickr",
                    //   imports: [Ng2FlatpickrDirective],
                    template: `
    <div class="ng2-flatpickr-input-container" #flatpickr>
		@if(!hideButton){
			<input
				class="ng2-flatpickr-input {{ addClass }}"
				[placeholder]="placeholder"
				[tabindex]="tabindex"
				type="text"
				(focus)="onFocus($event)"
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
                }]
        }], propDecorators: { flatpickrElement: [{
                type: ViewChild,
                args: ["flatpickr", {
                        static: true,
                    }]
            }], config: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], addClass: [{
                type: Input
            }], setDate: [{
                type: Input
            }], tabindex: [{
                type: Input
            }], hideButton: [{
                type: Input
            }] } });

class Ng2FlatpickrDirective {
    parent;
    ngControl;
    element;
    renderer;
    /**
     * The flatpickr configuration as a single object of values.
     *
     * See https://chmln.github.io/flatpickr/options/ for full list.
     */
    flatpickrOptions;
    /**
     * Placeholder for input field.
     *
     * Default:  null
     */
    placeholder;
    /**
     * Exactly the same as date format, but for the altInput field.
     *
     * Default:  "F j, Y"
     */
    flatpickrAltFormat;
    /**
     * Show the user a readable date (as per altFormat), but return something
     * totally different to the server.
     *
     * Default:  false
     */
    flatpickrAltInput;
    /**
     * This class will be added to the input element created by the altInput
     * option.
     *
     * Default:  ""
     */
    flatpickrAltInputClass;
    /**
     * Allows the user to enter a date directly input the input field. By
     * default, direct entry is disabled.
     *
     * Default:  false
     */
    flatpickrAllowInput;
    /**
     * Instead of body, appends the calendar to the specified node instead.
     *
     * Default:  null
     */
    flatpickrAppendTo; // HTMLElement
    /**
     * Whether clicking on the input should open the picker.
     * You could disable this if you wish to open the calendar manually
     * with.open().
     *
     * Default:  true
     */
    flatpickrClickOpens;
    /**
     * A string of characters which are used to define how the date will be
     * displayed in the input box.
     * See https://chmln.github.io/flatpickr/formatting/ for supported tokens.
     *
     * Default:  "Y-m-d"
     */
    flatpickrDateFormat;
    /**
     * Sets the initial selected date(s).
     *
     * If you're using {mode: "multiple"} or a range calendar supply an Array of
     * Date objects or an Array of date strings which follow your dateFormat.
     *
     * Otherwise, you can supply a single Date object or a date string.
     *
     * Default:  null
     */
    flatpickrDefaultDate;
    /**
     * Disable an array of specific dates, date ranges, or functions to disable
     * dates. See https://chmln.github.io/flatpickr/examples/#disabling-specific-dates
     *
     * Default:  []
     */
    flatpickrDisable;
    /**
     * Set disableMobile to true to always use the non-native picker. By
     * default, Flatpickr utilizes native datetime widgets unless certain
     * options (e.g. disable) are used.
     *
     * Default:  false
     */
    flatpickrDisableMobile;
    /**
     * Enable an array of specific dates, date ranges, or functions to enable
     * dates. See https://chmln.github.io/flatpickr/examples/#disabling-all-dates-except-select-few
     *
     * Default:  []
     */
    flatpickrEnable;
    /**
     * Enables time picker.
     *
     * Default:  false
     */
    flatpickrEnableTime;
    /**
     * Enables seconds in the time picker.
     *
     * Default:  false
     */
    flatpickrEnableSeconds;
    /**
     * Adjusts the step for the hour input (incl. scrolling).
     *
     * Default:  1
     */
    flatpickrHourIncrement;
    /**
     * Displays the calendar inline.
     *
     * Default:  false
     */
    flatpickrInline;
    /**
     * Use a specific locale for the flatpickr instance.
     *
     * Default:  null
     */
    flatpickrLocale;
    /**
     * The maximum date that a user can pick to (inclusive).
     *
     * Default:  null
     */
    flatpickrMaxDate;
    /**
     * The minimum date that a user can start picking from (inclusive).
     *
     * Default:  null
     */
    flatpickrMinDate;
    /**
     * Adjusts the step for the minute input (incl. scrolling).
     *
     * Default:  5
     */
    flatpickrMinuteIncrement;
    /**
     * "single", "multiple", or "range"
     *
     * Default:  "single"
     */
    flatpickrMode;
    /**
     * HTML for the arrow icon, used to switch months.
     *
     * Default:  ">"
     */
    flatpickrNextArrow;
    /**
     * Hides the day selection in calendar. Use it along with enableTime to
     * create a time picker.
     *
     * Default:  false
     */
    flatpickrNoCalendar;
    /**
     * Function that expects a date string and must return a Date object.
     *
     * Default:  false
     */
    flatpickrParseDate;
    /**
     * HTML for the left arrow icon.
     *
     * Default:  "<"
     */
    flatpickrPrevArrow;
    /**
     * Show the month using the shorthand version (ie, Sep instead of September).
     *
     * Default:  false
     */
    flatpickrShorthandCurrentMonth;
    /**
     * Position the calendar inside the wrapper and next to the input element
     * (Leave false unless you know what you're doing).
     *
     * Default:  false
     */
    flatpickrStatic;
    /**
     * Displays time picker in 24 hour mode without AM/PM selection when enabled.
     *
     * Default:  false
     */
    flatpickrTime_24hr;
    flatpickrUtc;
    /**
     * Enables display of week numbers in calendar.
     *
     * Default:  false
     */
    flatpickrWeekNumbers;
    /**
     * Custom elements and input groups.
     *
     * Default:  false
     */
    flatpickrWrap;
    /**
     * onChange gets triggered when the user selects a date, or changes the time on a selected date.
     *
     * Default:  null
     */
    flatpickrOnChange = new EventEmitter();
    /**
     * onClose gets triggered when the calendar is closed.
     *
     * Default:  null
     */
    flatpickrOnClose = new EventEmitter();
    /**
     * onOpen gets triggered when the calendar is opened.
     *
     * Default:  null
     */
    flatpickrOnOpen = new EventEmitter();
    /**
     * onReady gets triggered once the calendar is in a ready state.
     *
     * Default:  null
     */
    flatpickrOnReady = new EventEmitter();
    /** Allow double-clicking on the control to open/close it. */
    onClick() {
        this.flatpickr.toggle();
    }
    globalOnChange;
    globalOnClose;
    globalOnOpen;
    globalOnReady;
    flatpickr;
    formControlListener;
    constructor(parent, ngControl, element, renderer) {
        this.parent = parent;
        this.ngControl = ngControl;
        this.element = element;
        this.renderer = renderer;
    }
    get control() {
        return this.parent
            ? this.parent.formDirective.getControl(this.ngControl)
            : null;
    }
    ngAfterViewInit() {
        console.log("workin in directive");
        /** We cannot initialize the flatpickr instance in ngOnInit(); it will
                randomize the date when the form control initializes. */
        let nativeElement = this.element.nativeElement;
        if (typeof nativeElement === "undefined" || nativeElement === null) {
            throw "Error: invalid input element specified";
        }
        if (this.flatpickrOptions.wrap) {
            this.renderer.setAttribute(this.element.nativeElement, "data-input", "");
            nativeElement = nativeElement.parentNode;
        }
        this.flatpickr = (nativeElement.flatpickr(this.flatpickrOptions));
    }
    ngOnChanges(changes) {
        if (this.flatpickr &&
            this.flatpickrAltInput &&
            changes.hasOwnProperty("placeholder") &&
            changes["placeholder"].currentValue) {
            this.flatpickr.altInput.setAttribute("placeholder", changes["placeholder"].currentValue);
        }
    }
    ngOnDestroy() {
        if (this.flatpickr) {
            this.flatpickr.destroy();
        }
        if (this.formControlListener) {
            this.formControlListener.unsubscribe();
            this.formControlListener = undefined;
        }
        this.flatpickrOnChange = undefined;
        this.flatpickrOnClose = undefined;
        this.flatpickrOnOpen = undefined;
        this.flatpickrOnReady = undefined;
    }
    ngOnInit() {
        this.globalOnChange = this.flatpickrOptions.onChange;
        this.globalOnClose = this.flatpickrOptions.onClose;
        this.globalOnOpen = this.flatpickrOptions.onOpen;
        this.globalOnReady = this.flatpickrOptions.onReady;
        this.flatpickrOptions = {
            altFormat: this.getOption("altFormat"),
            altInput: this.getOption("altInput"),
            altInputClass: this.getOption("altInputClass"),
            allowInput: this.getOption("allowInput"),
            appendTo: this.getOption("appendTo"),
            clickOpens: this.getOption("clickOpens", true),
            dateFormat: this.getOption("dateFormat"),
            defaultDate: this.getOption("defaultDate"),
            disable: this.getOption("disable"),
            disableMobile: this.getOption("disableMobile"),
            enable: this.getOption("enable"),
            enableTime: this.getOption("enableTime"),
            enableSeconds: this.getOption("enableSeconds"),
            hourIncrement: this.getOption("hourIncrement"),
            inline: this.getOption("inline"),
            locale: this.getOption("locale"),
            maxDate: this.getOption("maxDate"),
            minDate: this.getOption("minDate"),
            minuteIncrement: this.getOption("minuteIncrement"),
            mode: this.getOption("mode"),
            nextArrow: this.getOption("nextArrow"),
            noCalendar: this.getOption("noCalendar"),
            onChange: this.eventOnChange.bind(this),
            onClose: this.eventOnClose.bind(this),
            onOpen: this.eventOnOpen.bind(this),
            onReady: this.eventOnReady.bind(this),
            parseDate: this.getOption("parseDate"),
            prevArrow: this.getOption("prevArrow"),
            shorthandCurrentMonth: this.getOption("shorthandCurrentMonth"),
            static: this.getOption("static"),
            time_24hr: this.getOption("time_24hr"),
            utc: this.getOption("utc"),
            weekNumbers: this.getOption("weekNumbers"),
            wrap: this.getOption("wrap", true),
        };
        // Remove unset properties
        Object.keys(this.flatpickrOptions).forEach((key) => {
            this.flatpickrOptions[key] === undefined &&
                delete this.flatpickrOptions[key];
        });
        if (this.control) {
            this.formControlListener = this.control.valueChanges.subscribe((value) => {
                if (!(value instanceof Date)) {
                    // Quietly update the value of the form control to be a
                    // Date object. This avoids any external subscribers
                    // from being notified a second time (once for the user
                    // initiated event, and once for our conversion to
                    // Date()).
                    this.control.setValue(new Date("" + value), {
                        onlySelf: true,
                        emitEvent: false,
                        emitModelToViewChange: false,
                        emitViewToModelChange: false,
                    });
                }
            });
        }
    }
    /**
     * Fire off the event emitter for the directive element, and also for the
     * global onChange callback, if defined.
     */
    eventOnChange(selectedDates, dateStr, instance) {
        let event = {
            selectedDates: selectedDates,
            dateStr: dateStr,
            instance: instance,
        };
        if (this.flatpickrOnChange) {
            this.flatpickrOnChange.emit(event);
        }
        if (this.globalOnChange) {
            this.globalOnChange(event);
        }
    }
    /**
     * Fire off the event emitter for the directive element, and also for the
     * global onClose callback, if defined.
     */
    eventOnClose(selectedDates, dateStr, instance) {
        let event = {
            selectedDates: selectedDates,
            dateStr: dateStr,
            instance: instance,
        };
        if (this.flatpickrOnClose) {
            this.flatpickrOnClose.emit(event);
        }
        if (this.globalOnClose) {
            this.globalOnClose(event);
        }
    }
    /**
     * Fire off the event emitter for the directive element, and also for the
     * global onOpen callback, if defined.
     */
    eventOnOpen(selectedDates, dateStr, instance) {
        let event = {
            selectedDates: selectedDates,
            dateStr: dateStr,
            instance: instance,
        };
        if (this.flatpickrOnOpen) {
            this.flatpickrOnOpen.emit(event);
        }
        if (this.globalOnOpen) {
            this.globalOnOpen(event);
        }
    }
    /**
     * Fire off the event emitter for the directive element, and also for the
     * global onReady callback, if defined.
     */
    eventOnReady(selectedDates, dateStr, instance) {
        let event = {
            selectedDates: selectedDates,
            dateStr: dateStr,
            instance: instance,
        };
        if (this.flatpickrOnReady) {
            this.flatpickrOnReady.emit(event);
        }
        if (this.globalOnReady) {
            this.globalOnReady(event);
        }
    }
    /**
     * Return the configuration value for option {option}, or {defaultValue} if it
     * doesn't exist.
     */
    getOption(option, defaultValue) {
        let localName = "flatpickr" + option.substring(0, 1).toUpperCase() + option.substring(1);
        if (typeof this[localName] !== "undefined") {
            return this[localName];
        }
        else if (typeof this.flatpickrOptions[option] !== "undefined") {
            return this.flatpickrOptions[option];
        }
        else {
            return defaultValue;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: Ng2FlatpickrDirective, deps: [{ token: i1.ControlContainer }, { token: i1.NgControl }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.2", type: Ng2FlatpickrDirective, isStandalone: true, selector: "[flatpickr]", inputs: { flatpickrOptions: ["flatpickr", "flatpickrOptions"], placeholder: "placeholder", flatpickrAltFormat: ["altFormat", "flatpickrAltFormat"], flatpickrAltInput: ["altInput", "flatpickrAltInput"], flatpickrAltInputClass: ["altInputClass", "flatpickrAltInputClass"], flatpickrAllowInput: ["allowInput", "flatpickrAllowInput"], flatpickrAppendTo: ["appendTo", "flatpickrAppendTo"], flatpickrClickOpens: ["clickOpens", "flatpickrClickOpens"], flatpickrDateFormat: ["dateFormat", "flatpickrDateFormat"], flatpickrDefaultDate: ["defaultDate", "flatpickrDefaultDate"], flatpickrDisable: ["disable", "flatpickrDisable"], flatpickrDisableMobile: ["disableMobile", "flatpickrDisableMobile"], flatpickrEnable: ["enable", "flatpickrEnable"], flatpickrEnableTime: ["enableTime", "flatpickrEnableTime"], flatpickrEnableSeconds: ["enableSeconds", "flatpickrEnableSeconds"], flatpickrHourIncrement: ["hourIncrement", "flatpickrHourIncrement"], flatpickrInline: ["inline", "flatpickrInline"], flatpickrLocale: ["locale", "flatpickrLocale"], flatpickrMaxDate: ["maxDate", "flatpickrMaxDate"], flatpickrMinDate: ["minDate", "flatpickrMinDate"], flatpickrMinuteIncrement: ["minuteIncrement", "flatpickrMinuteIncrement"], flatpickrMode: ["mode", "flatpickrMode"], flatpickrNextArrow: ["nextArrow", "flatpickrNextArrow"], flatpickrNoCalendar: ["noCalendar", "flatpickrNoCalendar"], flatpickrParseDate: ["parseDate", "flatpickrParseDate"], flatpickrPrevArrow: ["prevArrow", "flatpickrPrevArrow"], flatpickrShorthandCurrentMonth: ["shorthandCurrentMonth", "flatpickrShorthandCurrentMonth"], flatpickrStatic: ["static", "flatpickrStatic"], flatpickrTime_24hr: ["time_24hr", "flatpickrTime_24hr"], flatpickrUtc: ["utc", "flatpickrUtc"], flatpickrWeekNumbers: ["weekNumbers", "flatpickrWeekNumbers"], flatpickrWrap: ["wrap", "flatpickrWrap"] }, outputs: { flatpickrOnChange: "onChange", flatpickrOnClose: "onClose", flatpickrOnOpen: "onOpen", flatpickrOnReady: "onReady" }, host: { listeners: { "dblclick": "onClick()" } }, exportAs: ["ng2-flatpickr"], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.2", ngImport: i0, type: Ng2FlatpickrDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[flatpickr]",
                    exportAs: "ng2-flatpickr",
                }]
        }], ctorParameters: () => [{ type: i1.ControlContainer }, { type: i1.NgControl }, { type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { flatpickrOptions: [{
                type: Input,
                args: ["flatpickr"]
            }], placeholder: [{
                type: Input,
                args: ["placeholder"]
            }], flatpickrAltFormat: [{
                type: Input,
                args: ["altFormat"]
            }], flatpickrAltInput: [{
                type: Input,
                args: ["altInput"]
            }], flatpickrAltInputClass: [{
                type: Input,
                args: ["altInputClass"]
            }], flatpickrAllowInput: [{
                type: Input,
                args: ["allowInput"]
            }], flatpickrAppendTo: [{
                type: Input,
                args: ["appendTo"]
            }], flatpickrClickOpens: [{
                type: Input,
                args: ["clickOpens"]
            }], flatpickrDateFormat: [{
                type: Input,
                args: ["dateFormat"]
            }], flatpickrDefaultDate: [{
                type: Input,
                args: ["defaultDate"]
            }], flatpickrDisable: [{
                type: Input,
                args: ["disable"]
            }], flatpickrDisableMobile: [{
                type: Input,
                args: ["disableMobile"]
            }], flatpickrEnable: [{
                type: Input,
                args: ["enable"]
            }], flatpickrEnableTime: [{
                type: Input,
                args: ["enableTime"]
            }], flatpickrEnableSeconds: [{
                type: Input,
                args: ["enableSeconds"]
            }], flatpickrHourIncrement: [{
                type: Input,
                args: ["hourIncrement"]
            }], flatpickrInline: [{
                type: Input,
                args: ["inline"]
            }], flatpickrLocale: [{
                type: Input,
                args: ["locale"]
            }], flatpickrMaxDate: [{
                type: Input,
                args: ["maxDate"]
            }], flatpickrMinDate: [{
                type: Input,
                args: ["minDate"]
            }], flatpickrMinuteIncrement: [{
                type: Input,
                args: ["minuteIncrement"]
            }], flatpickrMode: [{
                type: Input,
                args: ["mode"]
            }], flatpickrNextArrow: [{
                type: Input,
                args: ["nextArrow"]
            }], flatpickrNoCalendar: [{
                type: Input,
                args: ["noCalendar"]
            }], flatpickrParseDate: [{
                type: Input,
                args: ["parseDate"]
            }], flatpickrPrevArrow: [{
                type: Input,
                args: ["prevArrow"]
            }], flatpickrShorthandCurrentMonth: [{
                type: Input,
                args: ["shorthandCurrentMonth"]
            }], flatpickrStatic: [{
                type: Input,
                args: ["static"]
            }], flatpickrTime_24hr: [{
                type: Input,
                args: ["time_24hr"]
            }], flatpickrUtc: [{
                type: Input,
                args: ["utc"]
            }], flatpickrWeekNumbers: [{
                type: Input,
                args: ["weekNumbers"]
            }], flatpickrWrap: [{
                type: Input,
                args: ["wrap"]
            }], flatpickrOnChange: [{
                type: Output,
                args: ["onChange"]
            }], flatpickrOnClose: [{
                type: Output,
                args: ["onClose"]
            }], flatpickrOnOpen: [{
                type: Output,
                args: ["onOpen"]
            }], flatpickrOnReady: [{
                type: Output,
                args: ["onReady"]
            }], onClick: [{
                type: HostListener,
                args: ["dblclick"]
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { Ng2FlatpickrComponent as Ng2Flatpickr, Ng2FlatpickrDirective };
//# sourceMappingURL=ng2-flatpickr.mjs.map
