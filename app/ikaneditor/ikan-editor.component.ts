/**
 * Created by kucingmint on 11/8/16.
 */
import {Component} from "@angular/core";

export class IkanClass {
    id: number;
    nama_ikan: string;
}


@Component ({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'ikan-editor.component.html'
})


export class IkanEditorComponent{
    title = 'Daftar Ikan';
    ikan_sub : IkanClass = {
        id: 2,
        nama_ikan: "Ikan lele"
    }
}