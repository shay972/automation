import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {NewRunComponent} from './pages/NewRun/newrun.component';
import {CurrentRunsComponent} from './pages/CurrentRuns/currentruns.component';
import {ResultsComponent} from './pages/Results/results.component';
import {TestsListComponent} from './pages/TestsList/testslist.component';


const appRoutes: Routes = [
   { path: 'NewRun', component: NewRunComponent },
   { path: 'CurrentRuns', component: CurrentRunsComponent },
   { path: 'Results', component: ResultsComponent },
   { path: 'TestsList', component: TestsListComponent },
//   { path: '', pathMatch: 'prefix', redirectTo: 'NewRun' },
//   { path: '**', component: NewRunComponent }
     { path: '', pathMatch: 'prefix', redirectTo: 'ResultsComponent' },
   { path: '**', component: ResultsComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

