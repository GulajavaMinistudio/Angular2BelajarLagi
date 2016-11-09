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
}