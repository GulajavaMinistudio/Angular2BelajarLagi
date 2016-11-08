import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
/**
 * Created by kucingmint on 11/8/16.
 */

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);