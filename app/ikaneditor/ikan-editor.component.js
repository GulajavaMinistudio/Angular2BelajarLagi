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
var IkanEditorComponent = (function () {
    function IkanEditorComponent(ikanServices) {
        this.ikanServices = ikanServices;
        this.title = 'Daftar Ikan';
    }
    IkanEditorComponent.prototype.getDaftarIkan = function () {
        var _this = this;
        this.ikanServices.getDaftarIkanPromisAsync()
            .then(function (list_ikan_promise) { return _this.list_ikan = list_ikan_promise; });
    };
    IkanEditorComponent.prototype.getDaftarIkanBesar = function () {
        var _this = this;
        this.ikanServices.getDaftarIkanBesarPromiseAsync()
            .then(function (list_ikan_besar_promise) { return _this.list_ikan = list_ikan_besar_promise; });
    };
    IkanEditorComponent.prototype.ngOnInit = function () {
        this.getDaftarIkan();
    };
    IkanEditorComponent.prototype.onSelect = function (ikan_pilih) {
        this.ikanPilihan = ikan_pilih;
    };
    IkanEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'ikan-list.component.html',
            styleUrls: ["ikan-editor.component.css"]
        }), 
        __metadata('design:paramtypes', [ikan_data_service_1.IkanDataService])
    ], IkanEditorComponent);
    return IkanEditorComponent;
}());
exports.IkanEditorComponent = IkanEditorComponent;
//# sourceMappingURL=ikan-editor.component.js.map