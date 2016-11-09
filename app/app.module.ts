/**
 * Created by kucingmint on 11/8/16.
 */


import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {QuickstartComponent} from "./quickstarts/quickstart.component";
import {IkanEditorComponent} from "./ikaneditor/ikan-editor.component";
import {FormsModule} from "@angular/forms";
import {IkanDetailComponent} from "./ikaneditor/ikan-detail.component";


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [QuickstartComponent,
    IkanEditorComponent, IkanDetailComponent],
    bootstrap: [IkanEditorComponent]
})

export class AppModule{}