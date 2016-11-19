///<reference path="../../node_modules/@types/core-js/index.d.ts"/>
/**
 * Created by kucingmint on 11/9/16.
 */


import {Injectable} from "@angular/core";
import {IkanClass} from "./ikan-detail-class";
import {ListIkanMock, ListIkanBesarMock} from "./mock-daftar-ikan"

@Injectable()
export class IkanDataService {
    getDaftarIkan(): IkanClass[] {
        return ListIkanMock;
    }

    getDaftarIkanBesar(): IkanClass[] {
        return ListIkanBesarMock;
    }

    getDaftarIkanPromisAsync(): Promise<IkanClass[]> {
        return Promise.resolve(ListIkanMock);
    }

    getDaftarIkanBesarPromiseAsync(): Promise<IkanClass[]> {
        return Promise.resolve(ListIkanBesarMock);
    }

    getIkanSatu(id: number) : Promise<IkanClass> {

        return this.getDaftarIkanPromisAsync()
            .then(ikanlist => ikanlist.find(ikanitem => ikanitem.id_nama_ikan === id));
    }

    getIkanBesarSatu(id: number) : Promise<IkanClass> {

        return this.getDaftarIkanBesarPromiseAsync()
            .then(ikanbesarlist => ikanbesarlist.find(ikanbesaritem => ikanbesaritem.id_nama_ikan === id));
    }
}











