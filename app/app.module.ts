import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';

import { routing,appRoutingProviders } from './app.routing';
import {HttpRequest} from './pages/Results/http_request.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HeaderComponent } from './header.component';
import {NewRunComponent} from './pages/NewRun/newrun.component';
import {CurrentRunsComponent} from './pages/CurrentRuns/currentruns.component';
import {ResultsComponent} from './pages/Results/results.component';
import {TestsListComponent} from './pages/TestsList/testslist.component';

import {ChartsBar} from './pages/Results/chart-bar.component';
import {Chartsdoughnut} from './pages/Results/chart-doughnut.component';
 
@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    routing,
    ChartsModule 
    ],

  declarations: [ 
    AppComponent, 
        HeaderComponent,
        NewRunComponent,
        CurrentRunsComponent,
        ResultsComponent,
        TestsListComponent,
        ChartsBar,
        Chartsdoughnut
    ],

    providers: [
    appRoutingProviders,
 //   Http,
 //   HttpModule,
    HttpRequest
    ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
