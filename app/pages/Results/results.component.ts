import { Component, OnInit } from '@angular/core';
import { HttpRequest } from './http_request.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';


@Component({
  templateUrl: 'app/pages/Results/results.component.html',
  
})

 
 
export class ResultsComponent implements OnInit {
  FullFilter: string = "";
  FilterGWModel: string = "";
  FilterGWIP: string = "";
  FilterSSVer: string = "";
  FilterSSLCard: string = "";
  FilterCipher: string = "";
  FilterProduct: string = "";
  FilterGWMode: string = "";
  FilterCapping: string = "";
  FilterTestName: string = "";
  
  items:any[] = [];
  NumOfRecords: number;
  pageSize = 20;
  pages: any[];
  NumOfPages: number ;
  currentPage: number; 


  tests: any[];
  isLoading: any ;
  currentPost: any;
  postsLoading: any;
  groupID: any[] = [];
  gatewayModel: any[] = [];
  gatewayIP: any[] = [];
  ssVer: any[] = [];
  sslCard: any[] = [];
  cipher: any[] = [];
  product: any[] = [];
  gatewayMode: any[] = [];
  capping: any[] = [];
  testName: any[] = [];

  constructor(private _httpRequest: HttpRequest){
  }


  ngOnInit() {
    
      this.SendGet_All();
       // this.SendGet("",1);
      }

  private SendGet_All(){
    console.log("Send get all");
     this.isLoading = true;
     this._httpRequest.getRequest()
      .subscribe(MyTests => {
      this.tests = MyTests.Sizing;
      this.NumOfRecords =  this.tests.length;
      console.log("Number of records:" + this.NumOfRecords); 
      console.log("Setting filter.")
      this.SetFilter();  
      this.SendGet("",1); 
       },
        () => { 
        this.isLoading = false;
        });
    }

   private SendGetFilter_All(filter?: any, page?: number){
    console.log("Send get filter all");
     this._httpRequest.getRequest(filter)
      .subscribe(MyTests => {
      this.tests = MyTests.Sizing;
      this.NumOfRecords =  this.tests.length;
      console.log("Nums:" + this.NumOfRecords);
      console.log("Setting filter..") 
      this.SetFilter(); 
      this.SendGet(filter,1); 
       },
        () => { 
        this.isLoading = false;
        });
    }
 
  private SendGet(filter?: any, page?: number){
     console.log("Send get one page, page:" + page);
      this._httpRequest.getRequest(filter,page)
      .subscribe(MyTests => {
      this.isLoading = false;
      this.tests = MyTests.Sizing;

     console.log("filter::" + filter);
      if (filter && !page){
        this.NumOfRecords =  this.tests.length;
 
     console.log("Nums:" + this.NumOfRecords); 
      }
    
     
      this.ngOnChanges(page);
  //      console.log(this.tests.length);
      //console.log("zzz:" + this.groupID);
      },
        () => { 
        this.isLoading = false;
        });
   }

   SetFilter(){

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
          if (this.gatewayModel.indexOf(element.GatewayModel) == -1 ){
            this.gatewayModel.push(element.GatewayModel);
          }
      
          if (this.gatewayIP.indexOf(element.GatewayIP) == -1 ){
            this.gatewayIP.push(element.GatewayIP);
          }
      
          if (this.ssVer.indexOf(element.SSVer) == -1 ){
            this.ssVer.push(element.SSVer);
          }
      
          if (this.testName.indexOf(element.TestName) == -1 ){
            this.testName.push(element.TestName);
          }
        }

   }

  ngOnChanges(page?: number){
    this.currentPage = page;
    if (!page) this.currentPage=1;

    var pagesCount: number;
    pagesCount = this.NumOfRecords / this.pageSize; 
    if (this.NumOfRecords % 20 == 0){
      pagesCount = pagesCount -1;
      console.log ("divided by 20")
    }
  	this.pages = [];
		for (var i = 1; i <= pagesCount+1; i++)
			this.pages.push(i);
     this.NumOfPages = this.pages.length;
     

    console.log('pages:' + pagesCount );
	  }

  reloadPosts(P1: string, P2: string, P3:string){
    var filter: string;
    if (P3)
    {
    //console.log("P1:" + P1);  
      switch (P1){
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
    else
    {
      switch (P1){
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
           this.FilterGWModel="";
           this.FilterGWIP="";
           this.FilterSSVer="";
           this.FilterSSLCard="";
           this.FilterCipher="";
           this.FilterProduct="";
           this.FilterGWMode="";
           this.FilterCapping="";
           this.FilterTestName=""; 
        }
    }

    this.FullFilter = this.FilterGWModel + this.FilterGWIP + this.FilterSSVer + this.FilterSSLCard + this.FilterCipher + this.FilterProduct + this.FilterGWMode + this.FilterCapping + this.FilterTestName;

    this.currentPost = null;
    this.loadPosts(this.FullFilter);
    }

 
    private loadPosts(filter?: any, page?: number){
      this.postsLoading = true; 
      if (!page)
        this.SendGetFilter_All(filter,page);
      else
        this.SendGet(filter,page); 
    }


    onPageChanged(page: number) {
      console.log("page changed");
   //     var startIndex = (page - 1) * this.pageSize;
 	  }


    changePage(page: number){
    console.log("Clicked changed page" + page);
		this.currentPage = page; 
    if (!this.currentPage)
      this.currentPage=1;
// console.log("filter:" + this.FullFilter);
// console.log("Moving to page:" + page);
    this.loadPosts(this.FullFilter,page);
	  }

  	previous(){
      console.log("Clicked previous");
		if (this.currentPage == 1)
			return;

		this.currentPage--;
 //   console.log("Moving to page:" + this.currentPage)
    this.loadPosts(this.FullFilter,this.currentPage);
	  }

	  next(){
//      console.log("Clicked next");
		if (this.currentPage == this.pages.length)
			return; 
		
		this.currentPage++;
 //   console.log("Moving to page:" + this.currentPage)
    this.loadPosts(this.FullFilter,this.currentPage);
	  }

    	refresh(){
      console.log("Clicked refresh");
      this.SendGet_All();
	  }

}
