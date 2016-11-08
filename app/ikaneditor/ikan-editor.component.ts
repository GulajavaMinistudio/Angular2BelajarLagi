/**
 * Created by kucingmint on 11/8/16.
 */
import {Component} from "@angular/core";

export class IkanClass {
    id: number;
    nama_ikan: string;
}

const ikanList: IkanClass[] = [
    {id: 10, nama_ikan: "Lele"},
    {id: 11, nama_ikan: "Mujair"},
    {id: 12, nama_ikan: "Mas"},
    {id: 13, nama_ikan: "Mas Koi"},
    {id: 14, nama_ikan: "Teri"},
    {id: 15, nama_ikan: "Ikan ikanan"},
    {id: 16, nama_ikan: "Ikan Kura"}
];


@Component ({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'ikan-editor.component.html',
    styleUrls: ["ikan-editor.component.css"]
})


export class IkanEditorComponent{
    title = 'Daftar Ikan';
    list_ikan = ikanList;
    ikan_sub : IkanClass = {
        id: 2,
        nama_ikan: "Ikan lele"
    };
}