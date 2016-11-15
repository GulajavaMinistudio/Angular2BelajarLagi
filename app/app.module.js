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
var platform_browser_1 = require("@angular/platform-browser");
var quickstart_component_1 = require("./quickstarts/quickstart.component");
var ikan_editor_component_1 = require("./ikaneditor/ikan-editor.component");
var forms_1 = require("@angular/forms");
var ikan_detail_component_1 = require("./ikaneditor/ikan-detail.component");
var ikan_data_service_1 = require("./ikaneditor/ikan-data.service");
var ikan_routing_app_component_1 = require("./ikanroutingservice/ikan-routing-app.component");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./ikanroutingservice/dashboard.component");
var hello_dashboard_routing_component_1 = require("./ikanroutingservice/hello-dashboard-routing.component");
var dashboardcontoh_component_1 = require("./ikanroutingservice/dashboardcontoh.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: "ikan_list",
                        component: ikan_editor_component_1.IkanEditorComponent
                    },
                    {
                        path: "dashboard",
                        component: dashboard_component_1.DashboardComponent
                    },
                    {
                        path: "",
                        redirectTo: "/dashboard",
                        pathMatch: "full"
                    },
                    {
                        path: "hello-dashboard",
                        component: hello_dashboard_routing_component_1.HelloDashboardRouteComponent
                    },
                    {
                        path: "dashboard-contoh4",
                        component: dashboardcontoh_component_1.DashboardContohComponent
                    }
                ])
            ],
            declarations: [quickstart_component_1.QuickstartComponent,
                ikan_editor_component_1.IkanEditorComponent, ikan_detail_component_1.IkanDetailComponent, ikan_routing_app_component_1.IkanRoutingComponent,
                dashboard_component_1.DashboardComponent, hello_dashboard_routing_component_1.HelloDashboardRouteComponent, dashboardcontoh_component_1.DashboardContohComponent],
            bootstrap: [ikan_routing_app_component_1.IkanRoutingComponent],
            providers: [ikan_data_service_1.IkanDataService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map