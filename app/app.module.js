"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var http_request_service_1 = require('./pages/Results/http_request.service');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var header_component_1 = require('./header.component');
var newrun_component_1 = require('./pages/NewRun/newrun.component');
var currentruns_component_1 = require('./pages/CurrentRuns/currentruns.component');
var results_component_1 = require('./pages/Results/results.component');
var testslist_component_1 = require('./pages/TestsList/testslist.component');
var chart_bar_component_1 = require('./pages/Results/chart-bar.component');
var chart_doughnut_component_1 = require('./pages/Results/chart-doughnut.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_1.routing,
                ng2_charts_1.ChartsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                newrun_component_1.NewRunComponent,
                currentruns_component_1.CurrentRunsComponent,
                results_component_1.ResultsComponent,
                testslist_component_1.TestsListComponent,
                chart_bar_component_1.ChartsBar,
                chart_doughnut_component_1.Chartsdoughnut
            ],
            providers: [
                app_routing_1.appRoutingProviders,
                //   Http,
                //   HttpModule,
                http_request_service_1.HttpRequest
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map