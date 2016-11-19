/**
 * Created by kucingmint on 11/9/16.
 */


import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {IkanDataService} from "./ikan-data.service";
import {IkanClass} from "./ikan-detail-class";

import "rxjs/add/operator/switchMap";

@Component({
    moduleId: module.id,
    selector: "ikan-selector-detail",
    templateUrl: "ikan-list-detail.component.html",
    styleUrls: ["ikan-editor.component.css"]
})

export class IkanDetailComponent implements OnInit{

    constructor(
        private ikanService: IkanDataService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {

        this.route.params
            .switchMap((params : Params) => this.ikanService.getIkanSatu(+params["id"]))
            .subscribe(ikan_detail => this.ikan_detail = ikan_detail)
    }

    //kembali ke asal
    goBack() : void {
        this.location.back();
    }

    @Input()
    ikan_detail: IkanClass;
}

























