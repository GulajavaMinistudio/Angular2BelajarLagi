///<reference path="../../node_modules/@types/core-js/index.d.ts"/>
/**
 * Created by kucingmint on 11/9/16.
 */


import {Injectable} from "@angular/core";
import {IkanClass} from "./ikan-detail-class";
import {ListIkanMock, ListIkanBesarMock} from "./mock-daftar-ikan"
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IkanDataService {

    private headerReq: Headers;

    //konstruktor http servis
    constructor(private httpServ: Http) {

        this.headerReq = new Headers();
        this.headerReq.append("Content-Type", "application/json");
        this.headerReq.append('Accept', 'application/json');
    }

    getDaftarIkan(): IkanClass[] {
        return ListIkanMock;
    }

    getDaftarIkanPromisAsync(): Promise<IkanClass[]> {
        return Promise.resolve(ListIkanMock);
    }

    getDaftarIkanBesarPromiseAsync(): Promise<IkanClass[]> {
        return Promise.resolve(ListIkanBesarMock);
    }

    getIkanSatu(id: number): Promise<IkanClass> {

        return this.getDaftarIkanPromisAsync()
            .then(ikanlist => ikanlist.find(ikanitem => ikanitem.id === id));
    }

    //dengan menggunakan http
    //alamat http api
    private ikanListURL = 'app/ikanlist';


    getIkanListAPI(): Promise<IkanClass[]> {

        return this.httpServ.get(this.ikanListURL)
            .toPromise()
            .then(response => response.json().data as IkanClass[])
            .catch(this.handleError);
    }

    getIkanSatuAPI(id: number): Promise<IkanClass> {

        return this.getIkanListAPI()
            .then(ikan_listapi => ikan_listapi.find(ikanitem => ikanitem.id === id));
    }

    updateIkanDetail(ikanUpd: IkanClass): Promise<IkanClass> {

        //const url = `${this.heroesUrl}/${hero.id}`;
        const urlUpdate = this.ikanListURL + "/" + ikanUpd.id;

        console.log(urlUpdate);

        return this.httpServ
            .put(urlUpdate, JSON.stringify(ikanUpd), {headers: this.headerReq})
            .toPromise()
            .then(() => ikanUpd)
            .catch(this.handleError);
    }

    createIkanBaru(nameIkan: string): Promise<IkanClass> {
        return this.httpServ
            .post(this.ikanListURL, JSON.stringify({nama_ikan: nameIkan}), {headers: this.headerReq})
            .toPromise()
            .then(response => {
                console.log(response.json());
                return response.json().data;
            })
            .catch(this.handleError);
    }


    deleteIkanList(id: number): Promise<void> {
        const url = "" + this.ikanListURL + "/" + id;
        return this.httpServ.delete(url, {headers: this.headerReq})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('sebuah error telah terjadi', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}











