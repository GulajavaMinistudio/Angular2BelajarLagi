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
var mock_daftar_ikan_1 = require("./mock-daftar-ikan");
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
var IkanDataService = (function () {
    function IkanDataService(httpServ) {
        this.httpServ = httpServ;
        this.ikanListURL = 'app/ikanlist';
        this.headerReq = new http_1.Headers();
        this.headerReq.append("Content-Type", "application/json");
        this.headerReq.append('Accept', 'application/json');
    }
    IkanDataService.prototype.getDaftarIkan = function () {
        return mock_daftar_ikan_1.ListIkanMock;
    };
    IkanDataService.prototype.getDaftarIkanPromisAsync = function () {
        return Promise.resolve(mock_daftar_ikan_1.ListIkanMock);
    };
    IkanDataService.prototype.getDaftarIkanBesarPromiseAsync = function () {
        return Promise.resolve(mock_daftar_ikan_1.ListIkanBesarMock);
    };
    IkanDataService.prototype.getIkanSatu = function (id) {
        return this.getDaftarIkanPromisAsync()
            .then(function (ikanlist) { return ikanlist.find(function (ikanitem) { return ikanitem.id === id; }); });
    };
    IkanDataService.prototype.getIkanListAPI = function () {
        return this.httpServ.get(this.ikanListURL)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    IkanDataService.prototype.getIkanSatuAPI = function (id) {
        return this.getIkanListAPI()
            .then(function (ikan_listapi) { return ikan_listapi.find(function (ikanitem) { return ikanitem.id === id; }); });
    };
    IkanDataService.prototype.updateIkanDetail = function (ikanUpd) {
        var urlUpdate = this.ikanListURL + "/" + ikanUpd.id;
        console.log(urlUpdate);
        return this.httpServ
            .put(urlUpdate, JSON.stringify(ikanUpd), { headers: this.headerReq })
            .toPromise()
            .then(function () { return ikanUpd; })
            .catch(this.handleError);
    };
    IkanDataService.prototype.createIkanBaru = function (nameIkan) {
        return this.httpServ
            .post(this.ikanListURL, JSON.stringify({ nama_ikan: nameIkan }), { headers: this.headerReq })
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            return response.json().data;
        })
            .catch(this.handleError);
    };
    IkanDataService.prototype.deleteIkanList = function (id) {
        var url = "" + this.ikanListURL + "/" + id;
        return this.httpServ.delete(url, { headers: this.headerReq })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    IkanDataService.prototype.handleError = function (error) {
        console.error('sebuah error telah terjadi', error);
        return Promise.reject(error.message || error);
    };
    IkanDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], IkanDataService);
    return IkanDataService;
}());
exports.IkanDataService = IkanDataService;
//# sourceMappingURL=ikan-data.service.js.map