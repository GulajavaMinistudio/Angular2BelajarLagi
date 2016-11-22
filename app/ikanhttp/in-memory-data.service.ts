import {InMemoryDbService} from "angular-in-memory-web-api";
/**
 * Created by kucingmint on 11/21/16.
 */


export class InMemoryIkanDataService implements InMemoryDbService {

    //buat database ikan mock
    createDb() {
        let ikanlist = [
            {id: 10, nama_ikan: "Ikan Ikanan"},
            {id: 12, nama_ikan: "Ikan Mas"},
            {id: 13, nama_ikan: "Ikan Teri"},
            {id: 14, nama_ikan: "Ikan Sapu-Sapu"},
            {id: 15, nama_ikan: "Ikan Koi"}
        ];

        //nama ikan list harus sama dengan di url api nya
        return {ikanlist};
    }
}