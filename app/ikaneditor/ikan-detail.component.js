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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var ikan_data_service_1 = require("./ikan-data.service");
var ikan_detail_class_1 = require("./ikan-detail-class");
require("rxjs/add/operator/switchMap");
var IkanDetailComponent = (function () {
    function IkanDetailComponent(ikanService, route, location) {
        this.ikanService = ikanService;
        this.route = route;
        this.location = location;
    }
    IkanDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.ikanService.getIkanSatu(+params["id"]); })
            .subscribe(function (ikan_detail) { return _this.ikan_detail = ikan_detail; });
    };
    IkanDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ikan_detail_class_1.IkanClass)
    ], IkanDetailComponent.prototype, "ikan_detail", void 0);
    IkanDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ikan-selector-detail",
            templateUrl: "ikan-list-detail.component.html",
            styleUrls: ["ikan-editor.component.css"]
        }), 
        __metadata('design:paramtypes', [ikan_data_service_1.IkanDataService, router_1.ActivatedRoute, common_1.Location])
    ], IkanDetailComponent);
    return IkanDetailComponent;
}());
exports.IkanDetailComponent = IkanDetailComponent;
//# sourceMappingURL=ikan-detail.component.js.map