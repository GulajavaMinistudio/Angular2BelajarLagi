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
var IkanClass = (function () {
    function IkanClass() {
    }
    return IkanClass;
}());
exports.IkanClass = IkanClass;
var ikanList = [
    { id: 10, nama_ikan: "Lele" },
    { id: 11, nama_ikan: "Mujair" },
    { id: 12, nama_ikan: "Mas" },
    { id: 13, nama_ikan: "Mas Koi" },
    { id: 14, nama_ikan: "Teri" },
    { id: 15, nama_ikan: "Ikan ikanan" },
    { id: 16, nama_ikan: "Ikan Kura" }
];
var IkanEditorComponent = (function () {
    function IkanEditorComponent() {
        this.title = 'Daftar Ikan';
        this.list_ikan = ikanList;
        this.ikan_sub = {
            id: 2,
            nama_ikan: "Ikan lele"
        };
    }
    IkanEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'ikan-editor.component.html',
            styleUrls: ["ikan-editor.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], IkanEditorComponent);
    return IkanEditorComponent;
}());
exports.IkanEditorComponent = IkanEditorComponent;
//# sourceMappingURL=ikan-editor.component.js.map