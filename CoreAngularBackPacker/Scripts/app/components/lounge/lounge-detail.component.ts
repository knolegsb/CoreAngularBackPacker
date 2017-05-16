﻿import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AppService } from "../../services/app.service";
import { Lounge } from "../../viewmodels/lounge";

@Component({
    selector: "lounger-detail",
    template: `
        <div *ngIf="item" class="item-details">
            <h2>{{item.Subject}} - Detail View</h2>
            <ul>
                <li>
                    <label>Subject:</label>
                    <input [(ngModel)]="item.Subject" placeholder="Insert the title..."/>
                </li>
                <li>
                    <label>Message: </label>
                    <textarea [(ngModel)]="item.Message" placeholder="Insert a message..."></textarea>
                </li>
            </ul>
        </div>
        
        <div>
            <button (click)='onBack()'>Back to Home</button>
        </div>
    `

})

export class LoungeDetailComponent implements OnInit {
    item: Lounge;
    sub: any

    constructor(private AppService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var id = +params['id'];
            console.log("selected id" + id);
            this.AppService.getDiscussion(id).subscribe(item => this.item = item[0]);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBack(): void {
        this.router.navigate(['/home']);
    }
}