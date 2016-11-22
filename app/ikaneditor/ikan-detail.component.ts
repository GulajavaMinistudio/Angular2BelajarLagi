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

export class IkanDetailComponent implements OnInit {

    constructor(private ikanService: IkanDataService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {

        // this.route.params
        //     .switchMap((params : Params) => this.ikanService.getIkanSatu(+params["id"]))
        //     .subscribe(ikan_detail => this.ikan_detail = ikan_detail);

        this.route.params
            .switchMap((params: Params) => this.ikanService.getIkanSatuAPI(+params["id"]))
            .subscribe(ikan => this.ikan_detail = ikan);
    }

    //kembali ke asal
    goBack(): void {
        this.location.back();
    }

    //simpan dengan rest client
    saveIkan(): void {
        this.ikanService.updateIkanDetail(this.ikan_detail)
            .then(() => this.goBack());
            // .catch(message => console.log(message));
    }

    @Input()
    ikan_detail: IkanClass;
}

























