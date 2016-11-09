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


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [QuickstartComponent,
    IkanEditorComponent, IkanDetailComponent],
    bootstrap: [IkanEditorComponent],
    providers: [IkanDataService] //provider data service jika ingin ada di level globa
})

export class AppModule{}