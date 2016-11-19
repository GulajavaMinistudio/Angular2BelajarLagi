import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {IkanEditorComponent} from "../ikaneditor/ikan-editor.component";
import {DashboardComponent} from "./dashboard.component";
import {DashboardContohComponent} from "./dashboardcontoh.component";
import {HelloDashboardRouteComponent} from "./hello-dashboard-routing.component";
import {IkanDetailComponent} from "../ikaneditor/ikan-detail.component";
/**
 * Created by kucingmint on 11/18/16.
 */

const routers : Routes = [
    {
        path: "ikan_list",
        component: IkanEditorComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    {
        path: "hello-dashboard",
        component: HelloDashboardRouteComponent
    },
    {
        path: "dashboard-contoh4",
        component: DashboardContohComponent
    },
    {
        path: 'detail/:id',
        component: IkanDetailComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
})

export class AppRoutingModule {}


















