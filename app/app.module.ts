/**
 * Created by kucingmint on 11/8/16.
 */


import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {QuickstartComponent} from "./quickstarts/quickstart.component";
import {IkanEditorComponent} from "./ikaneditor/ikan-editor.component";
import {FormsModule} from "@angular/forms";
import {IkanDetailComponent} from "./ikaneditor/ikan-detail.component";
import {IkanDataService} from "./ikaneditor/ikan-data.service";
import {IkanRoutingComponent} from "./ikanroutingservice/ikan-routing-app.component";
import {DashboardComponent} from "./ikanroutingservice/dashboard.component";
import {HelloDashboardRouteComponent} from "./ikanroutingservice/hello-dashboard-routing.component";
import {DashboardContohComponent} from "./ikanroutingservice/dashboardcontoh.component";
import {AppRoutingModule} from "./ikanroutingservice/app-routing.module";


@NgModule({
    imports: [BrowserModule, FormsModule,
        AppRoutingModule

        // RouterModule.forRoot([
        //     {
        //         path: "ikan_list",
        //         component: IkanEditorComponent
        //     },
        //     {
        //         path: "dashboard",
        //         component: DashboardComponent
        //     },
        //     {
        //         path: "",
        //         redirectTo: "/dashboard",
        //         pathMatch: "full"
        //     },
        //     {
        //         path: "hello-dashboard",
        //         component: HelloDashboardRouteComponent
        //     },
        //     {
        //         path: "dashboard-contoh4",
        //         component: DashboardContohComponent
        //     },
        //     {
        //         path: 'detail/:id',
        //         component: IkanDetailComponent
        //     }
        // ])
    ],
    declarations: [QuickstartComponent,
        IkanEditorComponent, IkanDetailComponent, IkanRoutingComponent,
        DashboardComponent, HelloDashboardRouteComponent, DashboardContohComponent],
    bootstrap: [IkanRoutingComponent],
    providers: [IkanDataService] //provider data service jika ingin ada di level globa
})

export class AppModule {
}