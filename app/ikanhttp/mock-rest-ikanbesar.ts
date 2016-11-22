import {InMemoryDbService} from "angular-in-memory-web-api";
/**
 * Created by kucingmint on 11/21/16.
 */


export class InMemoryIkanBesarService implements InMemoryDbService {

    createDb() {

        let ikanbesarlist = [
            {id_nama_ikan: 11, nama_ikan: "Ikan Besar 1"},
            {id_nama_ikan: 12, nama_ikan: "Ikan Besar 2"},
            {id_nama_ikan: 13, nama_ikan: "Ikan Besar 3"},
            {id_nama_ikan: 14, nama_ikan: "Ikan Besar 4"},
            {id_nama_ikan: 15, nama_ikan: "Ikan Besar 5"},
            {id_nama_ikan: 16, nama_ikan: "Ikan Besar 6"}
        ];

        //nama ikan list harus sama dengan di url api nya
        return {ikanbesarlist}
    }
}