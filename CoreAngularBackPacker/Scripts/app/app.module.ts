import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import "rxjs/Rx";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LoungeDetailComponent } from "./components/lounge/lounge-detail.component";
import { PlaceDetailComponent } from "./components/explore/place-detail.component";
import { LoungeListComponent } from "./components/lounge/lounge-list.component";
import { PlaceListComponent } from "./components/explore/place-list.component";

import { AppRouting } from "./app.routing";
import { AppService } from "./services/app.service";

@NgModule({
    // directives, components, and pipes
    declarations: [
        AppComponent,
        HomeComponent,
        LoungeDetailComponent,
        PlaceDetailComponent,
        LoungeListComponent,
        PlaceListComponent
    ],

    // modules
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        AppRouting
    ],

    //services
    providers: [
        AppService
    ],
    bootstrap: [
        AppComponent
    ]    
})

export class AppModule { }