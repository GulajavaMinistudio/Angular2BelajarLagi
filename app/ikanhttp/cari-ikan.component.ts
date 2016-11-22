import {Component, OnInit} from "@angular/core";
import {CariIkanService} from "../ikaneditor/ikan-cari-data.service";
import {Observable, Subject} from "rxjs";
import {IkanClass} from "../ikaneditor/ikan-detail-class";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "ikan-search",
    templateUrl: "cari-ikan.component.html",
    styleUrls: ["cari-ikan.component.css"],
    providers: [CariIkanService]
})


export class IkanCariComponent implements OnInit {

    //nama observable mesti sama dengan nama binding di html
    ikanlist: Observable<IkanClass[]>;
    private searchTerms = new Subject<string>();

    constructor(private ikanSearchService: CariIkanService,
                private routers: Router) {
    }

    ngOnInit(): void {

        console.log("OnInit");

        this.ikanlist = this.searchTerms
            .debounceTime(300) //tunggu 300 ms sebelum melanjutkan event berikutnya
            .distinctUntilChanged() //abaikan jika kata kunci pencarian masih sama dengan sebelumnya
            .switchMap(             //ganti ke observable yang baru, dalam bentuk http observable
                termSearch => termSearch ? this.ikanSearchService.searchIkanHttp(termSearch)
                    //atau kembalikan observable kosong tanpa search term
                    : Observable.of<IkanClass[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<IkanClass[]>([]);
            })
    }

    //masukan nilai pencarian ke dalam observable service untuk
    //ambil data via http search
    searchIkan(termSearch: string): void {
        console.log(termSearch);
        this.searchTerms.next(termSearch);
    }


    goToDetail(ikan: IkanClass): void {
        let link = ['/detail', ikan.id];
        this.routers.navigate(link)
    }


}