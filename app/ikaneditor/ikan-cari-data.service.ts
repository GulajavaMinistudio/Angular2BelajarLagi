import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {IkanClass} from "./ikan-detail-class";
/**
 * Created by kucingmint on 11/22/16.
 */


@Injectable()
export class CariIkanService {

    private ikanListURL = 'app/ikanlist';

    constructor(private http: Http) {

    }

    searchIkanHttp(term: string) : Observable<IkanClass[]> {

        console.log("observable " + term);
        return this.http
            .get(this.ikanListURL + "/?nama_ikan=" + term)
            .map((res: Response) => res.json().data as IkanClass[]);
    }
}