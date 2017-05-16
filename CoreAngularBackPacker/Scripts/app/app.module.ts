import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

@NgModule({
    // directives, components, and pipes
    declarations: [
        AppComponent,
    ],

    // modules
    imports: [
        BrowserModule
    
    ],

    //services
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]    
})

export class AppModule { }