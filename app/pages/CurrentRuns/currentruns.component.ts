
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  templateUrl: 'app/pages/CurrentRuns/currentruns.component.html'
})




export class CurrentRunsComponent implements OnInit, OnDestroy {
  private timer;
   ticks=0;
    

  ngOnInit() {
    this.timer = Observable.timer(2000,5000);
    this.timer.subscribe(t => this.tickerFunc(t));
  }
    tickerFunc(tick){
    console.log(this);
    this.ticks = tick
  }

   ngOnDestroy(){
    console.log("Destroy timer");

  }
}

  


