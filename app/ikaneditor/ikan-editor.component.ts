/**
 * Created by kucingmint on 11/8/16.
 */
import {Component, OnInit} from "@angular/core";
import {IkanClass} from "./ikan-detail-class";
import {IkanDataService} from "./ikan-data.service";
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'my-ikan-routing',
    templateUrl: 'ikan-list.component.html',
    styleUrls: ["ikan-editor.component.css"]
    // providers: [IkanDataService] //jika ingin hanya di level komponen
})


export class IkanEditorComponent implements OnInit {

    title = 'Daftar Ikan';
    list_ikan: IkanClass[];
    ikanPilihan: IkanClass;

    constructor(private ikanServices: IkanDataService,
                private routers: Router) {
        // this.list_ikan = this.ikanServices.getDaftarIkan();
    }

    getDaftarIkan(): void {
        this.ikanServices.getDaftarIkanPromisAsync()
            .then(list_ikan_promise => this.list_ikan = list_ikan_promise);
    }

    //dengan koneksi internet
    getDaftarIkanRest(): void {
        this.ikanServices.getIkanListAPI()
            .then(list_ikan_promise => this.list_ikan = list_ikan_promise);
    }

    getDaftarIkanBesar(): void {

        this.ikanServices.getDaftarIkanBesarPromiseAsync()
            .then(list_ikan_besar_promise => this.list_ikan = list_ikan_besar_promise);
    }

    ngOnInit(): void {
        // this.getDaftarIkan();
        this.getDaftarIkanRest();
    }

    onSelect(ikan_pilih: IkanClass): void {
        this.ikanPilihan = ikan_pilih;
    }


    lihatDetail(): void {
        this.routers.navigate(["/detail", this.ikanPilihan.id])
    }

    addIkanBaru(namaikan: string): void {

        let namaikan_trim = namaikan.trim();

        if (!namaikan_trim) {
            return;
        }

        this.ikanServices.createIkanBaru(namaikan_trim)
            .then(ikanitem => {
                this.list_ikan.push(ikanitem);
                this.ikanPilihan = null;
            })
    }


    deleteIkan(ikanhapus: IkanClass): void {

        this.ikanServices
            .deleteIkanList(ikanhapus.id)
            .then(() => {
                this.list_ikan = this.list_ikan.filter(ikan => ikan !== ikanhapus);
                if (this.ikanPilihan === ikanhapus) {
                    this.ikanPilihan = null;
                }
            })
    }

    // ikan_sub : IkanClass = {
    //     id: 2,
    //     nama_ikan: "Ikan lele"
    // };
    // list_ikan = ikanList;
}















