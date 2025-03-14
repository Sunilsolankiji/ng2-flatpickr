import { SimpleChanges } from "@angular/core";
import { FlatpickrOptions } from "./flatpickr-options.interface";
import * as i0 from "@angular/core";
export declare class Ng2FlatpickrComponent {
    flatpickr: Object;
    private _tabindex;
    onTouchedFn: Function;
    private defaultFlatpickrOptions;
    flatpickrElement: any;
    config: import("@angular/core").InputSignal<FlatpickrOptions>;
    placeholder: import("@angular/core").InputSignal<string>;
    addClass: import("@angular/core").InputSignal<string>;
    setDate: import("@angular/core").InputSignal<string | Date>;
    get tabindex(): number;
    set tabindex(ti: number);
    hideButton: import("@angular/core").InputSignal<boolean>;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    propagateChange: (_: any) => void;
    setDateFromInput(date: any): void;
    setAltInputPlaceholder(placeholder: string): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Ng2FlatpickrComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Ng2FlatpickrComponent, "ng2-flatpickr", never, { "config": { "alias": "config"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "addClass": { "alias": "addClass"; "required": false; "isSignal": true; }; "setDate": { "alias": "setDate"; "required": false; "isSignal": true; }; "tabindex": { "alias": "tabindex"; "required": false; }; "hideButton": { "alias": "hideButton"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
