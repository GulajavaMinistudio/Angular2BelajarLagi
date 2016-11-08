/**
 * Created by kucingmint on 11/8/16.
 */


import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {QuickstartComponent} from "./quickstarts/quickstart.component";


@NgModule({
    imports: [BrowserModule],
    declarations: [QuickstartComponent],
    bootstrap: [QuickstartComponent]
})

export class AppModule{}