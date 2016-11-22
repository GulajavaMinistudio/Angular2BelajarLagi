"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ikan_cari_data_service_1 = require("../ikaneditor/ikan-cari-data.service");
var rxjs_1 = require("rxjs");
var router_1 = require("@angular/router");
var IkanCariComponent = (function () {
    function IkanCariComponent(ikanSearchService, routers) {
        this.ikanSearchService = ikanSearchService;
        this.routers = routers;
        this.searchTerms = new rxjs_1.Subject();
    }
    IkanCariComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("OnInit");
        this.ikanlist = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (termSearch) { return termSearch ? _this.ikanSearchService.searchIkanHttp(termSearch)
            : rxjs_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return rxjs_1.Observable.of([]);
        });
    };
    IkanCariComponent.prototype.searchIkan = function (termSearch) {
        console.log(termSearch);
        this.searchTerms.next(termSearch);
    };
    IkanCariComponent.prototype.goToDetail = function (ikan) {
        var link = ['/detail', ikan.id];
        this.routers.navigate(link);
    };
    IkanCariComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ikan-search",
            templateUrl: "cari-ikan.component.html",
            styleUrls: ["cari-ikan.component.css"],
            providers: [ikan_cari_data_service_1.CariIkanService]
        }), 
        __metadata('design:paramtypes', [ikan_cari_data_service_1.CariIkanService, router_1.Router])
    ], IkanCariComponent);
    return IkanCariComponent;
}());
exports.IkanCariComponent = IkanCariComponent;
//# sourceMappingURL=cari-ikan.component.js.map