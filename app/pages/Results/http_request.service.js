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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var HttpRequest = (function () {
    //   private _url = "http://jsonplaceholder.typicode.com/users";
    function HttpRequest(_http) {
        this._http = _http;
        this._url = "http://10.1.11.4/automation/api.php/Sizing?transform=1";
    }
    HttpRequest.prototype.getRequest = function (filter, page) {
        var url = this._url;
        var _page;
        var _order = "&filter[]=TestStatus,eq,success&order=RunDate,desc";
        if (page)
            _page = "&page=" + page;
        else
            _page = "";
        if (filter)
            url = this._url + filter;
        console.log(url + _order + _page);
        return this._http.get(url + _order + _page)
            .map(function (res) { return res.json(); });
    };
    HttpRequest.prototype.postRequest = function (post) {
        return this._http.post(this._url, JSON.stringify(post))
            .map(function (res) { return res.json(); });
    };
    HttpRequest = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpRequest);
    return HttpRequest;
}());
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=http_request.service.js.map