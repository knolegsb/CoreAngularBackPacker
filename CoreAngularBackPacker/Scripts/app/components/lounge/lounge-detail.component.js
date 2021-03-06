System.register(["@angular/core", "@angular/router", "../../services/app.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_service_1;
    var LoungeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            LoungeDetailComponent = (function () {
                function LoungeDetailComponent(AppService, router, route) {
                    this.AppService = AppService;
                    this.router = router;
                    this.route = route;
                }
                LoungeDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        var id = +params['id'];
                        console.log("selected id" + id);
                        _this.AppService.getDiscussion(id).subscribe(function (item) { return _this.item = item[0]; });
                    });
                };
                LoungeDetailComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                LoungeDetailComponent.prototype.onBack = function () {
                    this.router.navigate(['/home']);
                };
                LoungeDetailComponent = __decorate([
                    core_1.Component({
                        selector: "lounger-detail",
                        template: "\n        <div *ngIf=\"item\" class=\"item-details\">\n            <h2>{{item.Subject}} - Detail View</h2>\n            <ul>\n                <li>\n                    <label>Subject:</label>\n                    <input [(ngModel)]=\"item.Subject\" placeholder=\"Insert the title...\"/>\n                </li>\n                <li>\n                    <label>Message: </label>\n                    <textarea [(ngModel)]=\"item.Message\" placeholder=\"Insert a message...\"></textarea>\n                </li>\n            </ul>\n        </div>\n        \n        <div>\n            <button (click)='onBack()'>Back to Home</button>\n        </div>\n    ",
                        styles: ["\n        .item-details{\n            margin: 5px;\n            padidng: 5px 10px;\n            border: 1px solid 9BCCE0;\n            background-color: #DDF0D5;\n            width: 500px;\n        }\n        .item-details * {\n            vertical-align: middle;\n        }\n        .item-details ul li {\n            padding: 5px 0;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router, router_1.ActivatedRoute])
                ], LoungeDetailComponent);
                return LoungeDetailComponent;
            }());
            exports_1("LoungeDetailComponent", LoungeDetailComponent);
        }
    }
});
