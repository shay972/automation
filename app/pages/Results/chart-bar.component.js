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
//width:60%; height: 60%;
var ChartsBar = (function () {
    function ChartsBar() {
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    // events
    ChartsBar.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartsBar.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartsBar = __decorate([
        core_1.Component({
            selector: 'my-chart-bar',
            styles: ["\n    .chart {\n      display: block;\n    }\n  "],
            template: "\n     <base-chart\n      class=\"chart\"\n      [datasets]=\"barChartData\"\n      [labels]=\"barChartLabels\"\n      [options]=\"barChartOptions\"\n      [legend]=\"barChartLegend\"\n      [chartType]=\"barChartType\"\n      (chartHover)=\"chartHovered($event)\"\n      (chartClick)=\"chartClicked($event)\">\n     </base-chart>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ChartsBar);
    return ChartsBar;
}());
exports.ChartsBar = ChartsBar;
//# sourceMappingURL=chart-bar.component.js.map