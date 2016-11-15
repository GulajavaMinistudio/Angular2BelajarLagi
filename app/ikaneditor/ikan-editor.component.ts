/**
 * Created by kucingmint on 11/8/16.
 */
import {Component, OnInit} from "@angular/core";
import {IkanClass} from "./ikan-detail-class";
import {IkanDataService} from "./ikan-data.service";


@Component({
    moduleId: module.id,
    selector: 'my-ikan-routing',
    templateUrl: 'ikan-list.component.html',
    styleUrls: ["ikan-editor.component.css"]
    // providers: [IkanDataService] //jika ingin hanya di level komponen
})


export class IkanEditorComponent implements OnInit{

    title = 'Daftar Ikan';
    list_ikan: IkanClass[];
    ikanPilihan: IkanClass;

    constructor(private ikanServices: IkanDataService) {
        // this.list_ikan = this.ikanServices.getDaftarIkan();
    }

    getDaftarIkan(): void {
        this.ikanServices.getDaftarIkanPromisAsync()
            .then(list_ikan_promise => this.list_ikan = list_ikan_promise);
    }

    getDaftarIkanBesar(): void {
        this.ikanServices.getDaftarIkanBesarPromiseAsync()
            .then(list_ikan_besar_promise => this.list_ikan = list_ikan_besar_promise);
    }

    ngOnInit(): void {
        this.getDaftarIkan();
    }

    onSelect(ikan_pilih: IkanClass): void {
        this.ikanPilihan = ikan_pilih;
    }

    // ikan_sub : IkanClass = {
    //     id: 2,
    //     nama_ikan: "Ikan lele"
    // };
    // list_ikan = ikanList;
}















