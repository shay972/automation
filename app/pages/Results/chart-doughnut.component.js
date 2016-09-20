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
//width:70%; height: 70%;
var Chartsdoughnut = (function () {
    function Chartsdoughnut() {
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
    }
    // events
    Chartsdoughnut.prototype.chartClicked = function (e) {
        console.log(e);
    };
    Chartsdoughnut.prototype.chartHovered = function (e) {
        console.log(e);
    };
    Chartsdoughnut = __decorate([
        core_1.Component({
            selector: 'my-chart-doughnut',
            styles: ["\n    .chart {\n      display: block; \n    }\n  "],
            template: "\n     <base-chart\n     class=\"chart\"\n      [data]=\"doughnutChartData\"\n                [labels]=\"doughnutChartLabels\"\n                [chartType]=\"doughnutChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\">\n     </base-chart>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Chartsdoughnut);
    return Chartsdoughnut;
}());
exports.Chartsdoughnut = Chartsdoughnut;
//# sourceMappingURL=chart-doughnut.component.js.map