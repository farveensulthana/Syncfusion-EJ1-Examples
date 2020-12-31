import 'syncfusion-javascript/Scripts/ej/web/ej.radialslider.min';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, ElementRef, ChangeDetectorRef } from '@angular/core';
export declare class RadialSliderComponent extends EJComponents<any, any> {
    el: ElementRef;
    cdRef: ChangeDetectorRef;
    private _ejIterableDiffers;
    private _ejkeyvaluediffers;
    autoOpen_input: any;
    cssClass_input: any;
    enableAnimation_input: any;
    enableRoundOff_input: any;
    endAngle_input: any;
    inline_input: any;
    innerCircleImageClass_input: any;
    innerCircleImageUrl_input: any;
    labelSpace_input: any;
    locale_input: any;
    radius_input: any;
    showInnerCircle_input: any;
    startAngle_input: any;
    strokeWidth_input: any;
    ticks_input: any;
    options: any;
    value_two: any;
    value_twoChange: EventEmitter<any>;
    change_output: EventEmitter<{}>;
    ejchange_output: EventEmitter<{}>;
    create_output: EventEmitter<{}>;
    mouseover_output: EventEmitter<{}>;
    slide_output: EventEmitter<{}>;
    start_output: EventEmitter<{}>;
    stop_output: EventEmitter<{}>;
    constructor(el: ElementRef, cdRef: ChangeDetectorRef, _ejIterableDiffers: IterableDiffers, _ejkeyvaluediffers: KeyValueDiffers);
}
export declare var EJ_RADIALSLIDER_COMPONENTS: Type<any>[];