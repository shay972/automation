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
var http_request_service_1 = require('./http_request.service');
var ResultsComponent = (function () {
    function ResultsComponent(_httpRequest) {
        this._httpRequest = _httpRequest;
        this.FullFilter = "";
        this.FilterGWModel = "";
        this.FilterGWIP = "";
        this.FilterSSVer = "";
        this.FilterSSLCard = "";
        this.FilterCipher = "";
        this.FilterProduct = "";
        this.FilterGWMode = "";
        this.FilterCapping = "";
        this.FilterTestName = "";
        this.items = [];
        this.pageSize = 20;
        this.groupID = [];
        this.gatewayModel = [];
        this.gatewayIP = [];
        this.ssVer = [];
        this.sslCard = [];
        this.cipher = [];
        this.product = [];
        this.gatewayMode = [];
        this.capping = [];
        this.testName = [];
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.SendGet_All();
        // this.SendGet("",1);
    };
    ResultsComponent.prototype.SendGet_All = function () {
        var _this = this;
        console.log("Send get all");
        this.isLoading = true;
        this._httpRequest.getRequest()
            .subscribe(function (MyTests) {
            _this.tests = MyTests.Sizing;
            _this.NumOfRecords = _this.tests.length;
            console.log("Number of records:" + _this.NumOfRecords);
            console.log("Setting filter.");
            _this.SetFilter();
            _this.SendGet("", 1);
        }, function () {
            _this.isLoading = false;
        });
    };
    ResultsComponent.prototype.SendGetFilter_All = function (filter, page) {
        var _this = this;
        console.log("Send get filter all");
        this._httpRequest.getRequest(filter)
            .subscribe(function (MyTests) {
            _this.tests = MyTests.Sizing;
            _this.NumOfRecords = _this.tests.length;
            console.log("Nums:" + _this.NumOfRecords);
            console.log("Setting filter..");
            _this.SetFilter();
            _this.SendGet(filter, 1);
        }, function () {
            _this.isLoading = false;
        });
    };
    ResultsComponent.prototype.SendGet = function (filter, page) {
        var _this = this;
        console.log("Send get one page, page:" + page);
        this._httpRequest.getRequest(filter, page)
            .subscribe(function (MyTests) {
            _this.isLoading = false;
            _this.tests = MyTests.Sizing;
            console.log("filter::" + filter);
            if (filter && !page) {
                _this.NumOfRecords = _this.tests.length;
                console.log("Nums:" + _this.NumOfRecords);
            }
            _this.ngOnChanges(page);
            //      console.log(this.tests.length);
            //console.log("zzz:" + this.groupID);
        }, function () {
            _this.isLoading = false;
        });
    };
    ResultsComponent.prototype.SetFilter = function () {
        //  this.groupID = [];
        //  this.gatewayModel = [];
        //  this.gatewayIP = [];
        //  this.ssVer = [];
        //  this.sslCard = [];
        //  this.cipher = [];
        //  this.product = [];
        //  this.gatewayMode = [];
        //  this.capping = [];
        //  this.testName = [];
        for (var index = 0; index < this.tests.length; index++) {
            var element = this.tests[index];
            if (this.gatewayModel.indexOf(element.GatewayModel) == -1) {
                this.gatewayModel.push(element.GatewayModel);
            }
            if (this.gatewayIP.indexOf(element.GatewayIP) == -1) {
                this.gatewayIP.push(element.GatewayIP);
            }
            if (this.ssVer.indexOf(element.SSVer) == -1) {
                this.ssVer.push(element.SSVer);
            }
            if (this.testName.indexOf(element.TestName) == -1) {
                this.testName.push(element.TestName);
            }
        }
    };
    ResultsComponent.prototype.ngOnChanges = function (page) {
        this.currentPage = page;
        if (!page)
            this.currentPage = 1;
        var pagesCount;
        pagesCount = this.NumOfRecords / this.pageSize;
        if (this.NumOfRecords % 20 == 0) {
            pagesCount = pagesCount - 1;
            console.log("divided by 20");
        }
        this.pages = [];
        for (var i = 1; i <= pagesCount + 1; i++)
            this.pages.push(i);
        this.NumOfPages = this.pages.length;
        console.log('pages:' + pagesCount);
    };
    ResultsComponent.prototype.reloadPosts = function (P1, P2, P3) {
        var filter;
        if (P3) {
            //console.log("P1:" + P1);  
            switch (P1) {
                case "GatewayModel":
                    this.gatewayModel = [];
                    this.FilterGWModel = "&filter[]=GatewayModel,eq," + P3;
                    this.gatewayModel.push(P3);
                    break;
                case "GatewayIP":
                    this.gatewayIP = [];
                    this.FilterGWIP = "&filter[]=GatewayIP,eq," + P3;
                    this.gatewayIP.push(P3);
                    break;
                case "SSVer":
                    this.ssVer = [];
                    this.FilterSSVer = "&filter[]=SSVer,eq," + P3;
                    this.ssVer.push(P3);
                    break;
                case "SSLCard":
                    this.sslCard = [];
                    this.FilterSSLCard = "&filter[]=SSLCard,eq," + P3;
                    this.sslCard.push(P3);
                    break;
                case "Cipher":
                    this.cipher = [];
                    this.FilterCipher = "&filter[]=Cipher,eq," + P3;
                    this.cipher.push(P3);
                    break;
                case "Product":
                    this.product = [];
                    this.FilterProduct = "&filter[]=Product,eq," + P3;
                    this.product.push(P3);
                    break;
                case "GwMode":
                    this.gatewayMode = [];
                    this.FilterGWMode = "&filter[]=GwMode,eq," + P3;
                    this.gatewayMode.push(P3);
                    break;
                case "Capping":
                    this.capping = [];
                    this.FilterCapping = "&filter[]=Capping,eq," + P3;
                    this.capping.push(P3);
                    break;
                case "TestName":
                    this.testName = [];
                    this.FilterTestName = "&filter[]=TestName,eq," + P3;
                    this.testName.push(P3);
                    break;
                default:
                    this.gatewayModel = [];
                    this.gatewayIP = [];
                    this.ssVer = [];
                    this.sslCard = [];
                    this.cipher = [];
                    this.product = [];
                    this.gatewayMode = [];
                    this.capping = [];
                    this.testName = [];
            }
        }
        else {
            switch (P1) {
                case "GatewayModel":
                    this.FilterGWModel = "";
                    break;
                case "GatewayIP":
                    this.FilterGWIP = "";
                    break;
                case "SSVer":
                    this.FilterSSVer = "";
                    break;
                case "SSLCard":
                    this.FilterSSLCard = "";
                    break;
                case "Cipher":
                    this.FilterCipher = "";
                    break;
                case "Product":
                    this.FilterProduct = "";
                    break;
                case "gatewayMode":
                    this.FilterGWMode = "";
                    break;
                case "Capping":
                    this.FilterCapping = "";
                    break;
                case "TestName":
                    this.FilterTestName = "";
                    break;
                default:
                    this.FilterGWModel = "";
                    this.FilterGWIP = "";
                    this.FilterSSVer = "";
                    this.FilterSSLCard = "";
                    this.FilterCipher = "";
                    this.FilterProduct = "";
                    this.FilterGWMode = "";
                    this.FilterCapping = "";
                    this.FilterTestName = "";
            }
        }
        this.FullFilter = this.FilterGWModel + this.FilterGWIP + this.FilterSSVer + this.FilterSSLCard + this.FilterCipher + this.FilterProduct + this.FilterGWMode + this.FilterCapping + this.FilterTestName;
        this.currentPost = null;
        this.loadPosts(this.FullFilter);
    };
    ResultsComponent.prototype.loadPosts = function (filter, page) {
        this.postsLoading = true;
        if (!page)
            this.SendGetFilter_All(filter, page);
        else
            this.SendGet(filter, page);
    };
    ResultsComponent.prototype.onPageChanged = function (page) {
        console.log("page changed");
        //     var startIndex = (page - 1) * this.pageSize;
    };
    ResultsComponent.prototype.changePage = function (page) {
        console.log("Clicked changed page" + page);
        this.currentPage = page;
        if (!this.currentPage)
            this.currentPage = 1;
        // console.log("filter:" + this.FullFilter);
        // console.log("Moving to page:" + page);
        this.loadPosts(this.FullFilter, page);
    };
    ResultsComponent.prototype.previous = function () {
        console.log("Clicked previous");
        if (this.currentPage == 1)
            return;
        this.currentPage--;
        //   console.log("Moving to page:" + this.currentPage)
        this.loadPosts(this.FullFilter, this.currentPage);
    };
    ResultsComponent.prototype.next = function () {
        //      console.log("Clicked next");
        if (this.currentPage == this.pages.length)
            return;
        this.currentPage++;
        //   console.log("Moving to page:" + this.currentPage)
        this.loadPosts(this.FullFilter, this.currentPage);
    };
    ResultsComponent.prototype.refresh = function () {
        console.log("Clicked refresh");
        this.SendGet_All();
    };
    ResultsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pages/Results/results.component.html',
        }), 
        __metadata('design:paramtypes', [http_request_service_1.HttpRequest])
    ], ResultsComponent);
    return ResultsComponent;
}());
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=results.component.js.map