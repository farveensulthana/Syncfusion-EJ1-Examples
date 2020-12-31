import 'syncfusion-javascript/Scripts/ej/web/ej.button.min';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const ButtonValueAccessor: any;
export declare class ButtonComponent extends EJComponents<any, any> implements ControlValueAccessor {
    el: ElementRef;
    cdRef: ChangeDetectorRef;
    private _ejIterableDiffers;
    private _ejkeyvaluediffers;
    contentType_input: any;
    cssClass_input: any;
    enabled_input: any;
    enableRTL_input: any;
    height_input: any;
    htmlAttributes_input: any;
    imagePosition_input: any;
    prefixIcon_input: any;
    repeatButton_input: any;
    showRoundedCorner_input: any;
    size_input: any;
    suffixIcon_input: any;
    text_input: any;
    timeInterval_input: any;
    type_input: any;
    width_input: any;
    options: any;
    click_output: EventEmitter<{}>;
    ejclick_output: EventEmitter<{}>;
    create_output: EventEmitter<{}>;
    destroy_output: EventEmitter<{}>;
    constructor(el: ElementRef, cdRef: ChangeDetectorRef, _ejIterableDiffers: IterableDiffers, _ejkeyvaluediffers: KeyValueDiffers);
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare var EJ_BUTTON_COMPONENTS: Type<any>[];