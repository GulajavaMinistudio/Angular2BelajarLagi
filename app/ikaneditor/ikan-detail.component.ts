/**
 * Created by kucingmint on 11/9/16.
 */


import {Component, Input} from "@angular/core";
import {IkanClass} from "./ikan-detail-class";

@Component({
    moduleId: module.id,
    selector: "ikan-selector-detail",
    templateUrl: "ikan-list-detail.component.html",
    styleUrls: ["ikan-editor.component.css"]
})

export class IkanDetailComponent{
    @Input()
    ikan_detail: IkanClass;
}