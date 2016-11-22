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
var ikan_data_service_1 = require("./ikan-data.service");
var router_1 = require("@angular/router");
var IkanEditorComponent = (function () {
    function IkanEditorComponent(ikanServices, routers) {
        this.ikanServices = ikanServices;
        this.routers = routers;
        this.title = 'Daftar Ikan';
    }
    IkanEditorComponent.prototype.getDaftarIkan = function () {
        var _this = this;
        this.ikanServices.getDaftarIkanPromisAsync()
            .then(function (list_ikan_promise) { return _this.list_ikan = list_ikan_promise; });
    };
    IkanEditorComponent.prototype.getDaftarIkanRest = function () {
        var _this = this;
        this.ikanServices.getIkanListAPI()
            .then(function (list_ikan_promise) { return _this.list_ikan = list_ikan_promise; });
    };
    IkanEditorComponent.prototype.getDaftarIkanBesar = function () {
        var _this = this;
        this.ikanServices.getDaftarIkanBesarPromiseAsync()
            .then(function (list_ikan_besar_promise) { return _this.list_ikan = list_ikan_besar_promise; });
    };
    IkanEditorComponent.prototype.ngOnInit = function () {
        this.getDaftarIkanRest();
    };
    IkanEditorComponent.prototype.onSelect = function (ikan_pilih) {
        this.ikanPilihan = ikan_pilih;
    };
    IkanEditorComponent.prototype.lihatDetail = function () {
        this.routers.navigate(["/detail", this.ikanPilihan.id]);
    };
    IkanEditorComponent.prototype.addIkanBaru = function (namaikan) {
        var _this = this;
        var namaikan_trim = namaikan.trim();
        if (!namaikan_trim) {
            return;
        }
        this.ikanServices.createIkanBaru(namaikan_trim)
            .then(function (ikanitem) {
            _this.list_ikan.push(ikanitem);
            _this.ikanPilihan = null;
        });
    };
    IkanEditorComponent.prototype.deleteIkan = function (ikanhapus) {
        var _this = this;
        this.ikanServices
            .deleteIkanList(ikanhapus.id)
            .then(function () {
            _this.list_ikan = _this.list_ikan.filter(function (ikan) { return ikan !== ikanhapus; });
            if (_this.ikanPilihan === ikanhapus) {
                _this.ikanPilihan = null;
            }
        });
    };
    IkanEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-ikan-routing',
            templateUrl: 'ikan-list.component.html',
            styleUrls: ["ikan-editor.component.css"]
        }), 
        __metadata('design:paramtypes', [ikan_data_service_1.IkanDataService, router_1.Router])
    ], IkanEditorComponent);
    return IkanEditorComponent;
}());
exports.IkanEditorComponent = IkanEditorComponent;
//# sourceMappingURL=ikan-editor.component.js.map