import { ElementRef } from "@angular/core";
import { FlatpickrOptions } from "./flatpickr-options.interface";
import * as i0 from "@angular/core";
export declare class Ng2FlatpickrComponent {
    flatpickr: Object;
    private onFocusSubject;
    private defaultFlatpickrOptions;
    flatpickrElement: import("@angular/core").Signal<ElementRef<any>>;
    config: import("@angular/core").InputSignal<FlatpickrOptions>;
    placeholder: import("@angular/core").InputSignal<string>;
    addClass: import("@angular/core").InputSignal<string>;
    setDate: import("@angular/core").InputSignal<string | Date>;
    tabindex: import("@angular/core").InputSignal<number>;
    hideButton: import("@angular/core").InputSignal<boolean>;
    onChange: import("@angular/core").OutputEmitterRef<any>;
    onFocus: import("@angular/core").OutputEmitterRef<any>;
    constructor();
    ngAfterViewInit(): void;
    setDateFromInput(date: any): void;
    setAltInputPlaceholder(placeholder: string): void;
    debouncedOnFocus(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Ng2FlatpickrComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Ng2FlatpickrComponent, "ng2-flatpickr", never, { "config": { "alias": "config"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "addClass": { "alias": "addClass"; "required": false; "isSignal": true; }; "setDate": { "alias": "setDate"; "required": false; "isSignal": true; }; "tabindex": { "alias": "tabindex"; "required": false; "isSignal": true; }; "hideButton": { "alias": "hideButton"; "required": false; "isSignal": true; }; }, { "onChange": "onChange"; "onFocus": "onFocus"; }, never, ["*"], true, never>;
}
