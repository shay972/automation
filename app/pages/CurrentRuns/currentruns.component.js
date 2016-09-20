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
var Rx_1 = require('rxjs/Rx');
var CurrentRunsComponent = (function () {
    function CurrentRunsComponent() {
        this.ticks = 0;
    }
    CurrentRunsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = Rx_1.Observable.timer(2000, 5000);
        this.timer.subscribe(function (t) { return _this.tickerFunc(t); });
    };
    CurrentRunsComponent.prototype.tickerFunc = function (tick) {
        console.log(this);
        this.ticks = tick;
    };
    CurrentRunsComponent.prototype.ngOnDestroy = function () {
        console.log("Destroy timer");
    };
    CurrentRunsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pages/CurrentRuns/currentruns.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CurrentRunsComponent);
    return CurrentRunsComponent;
}());
exports.CurrentRunsComponent = CurrentRunsComponent;
//# sourceMappingURL=currentruns.component.js.map