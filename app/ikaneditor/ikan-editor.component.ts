/**
 * Created by kucingmint on 11/8/16.
 */
import {Component} from "@angular/core";
import {IkanClass} from "./ikan-detail-class";
import {IkanDataService} from "./ikan-data.service";


// const ikanList: IkanClass[] = [
//     {id_nama_ikan: 10, nama_ikan: "Lele"},
//     {id_nama_ikan: 11, nama_ikan: "Mujair"},
//     {id_nama_ikan: 12, nama_ikan: "Mas"},
//     {id_nama_ikan: 13, nama_ikan: "Mas Koi"},
//     {id_nama_ikan: 14, nama_ikan: "Teri"},
//     {id_nama_ikan: 15, nama_ikan: "Ikan ikanan"},
//     {id_nama_ikan: 16, nama_ikan: "Ikan Kura"}
// ];


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'ikan-list.component.html',
    styleUrls: ["ikan-editor.component.css"],
    providers: [IkanDataService]
})


export class IkanEditorComponent {
    title = 'Daftar Ikan';
    list_ikan: IkanClass[];
    ikanPilihan: IkanClass;

    constructor(private ikanServices: IkanDataService) {
        this.list_ikan = this.ikanServices.getDaftarIkan();
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