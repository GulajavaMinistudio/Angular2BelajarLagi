/**
 * Created by kucingmint on 11/8/16.
 */

import "./rxjs-extensions";
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
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryIkanDataService} from "./ikanhttp/in-memory-data.service";
import {IkanCariComponent} from "./ikanhttp/cari-ikan.component";

@NgModule({
    imports: [BrowserModule, FormsModule,
        AppRoutingModule, HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryIkanDataService)
    ],
    declarations: [QuickstartComponent,
        IkanEditorComponent, IkanDetailComponent, IkanRoutingComponent,
        DashboardComponent, HelloDashboardRouteComponent, DashboardContohComponent,
        IkanCariComponent],
    bootstrap: [IkanRoutingComponent],
    providers: [IkanDataService] //provider data service jika ingin ada di level globa
})

export class AppModule {
}