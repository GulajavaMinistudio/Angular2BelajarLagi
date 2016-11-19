/**
 * Created by kucingmint on 11/10/16.
 */

import {Component, OnInit} from "@angular/core";
import {IkanClass} from "../ikaneditor/ikan-detail-class";
import {IkanDataService} from "../ikaneditor/ikan-data.service";



@Component({
    moduleId: module.id,
    selector: "my-dashboard",
    templateUrl: "dashboard.component.html",
    styleUrls: ["dashboard.component.css"]
})

export class DashboardComponent implements OnInit{

    list_ikan : IkanClass[];
    constructor(private ikanService: IkanDataService) {}

    ngOnInit(): void {

        this.ikanService.getDaftarIkanPromisAsync()
            .then(list_ikan => this.list_ikan = list_ikan.slice(1,5));
    }

}