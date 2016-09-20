"use strict";
var router_1 = require('@angular/router');
var newrun_component_1 = require('./pages/NewRun/newrun.component');
var currentruns_component_1 = require('./pages/CurrentRuns/currentruns.component');
var results_component_1 = require('./pages/Results/results.component');
var testslist_component_1 = require('./pages/TestsList/testslist.component');
var appRoutes = [
    { path: 'NewRun', component: newrun_component_1.NewRunComponent },
    { path: 'CurrentRuns', component: currentruns_component_1.CurrentRunsComponent },
    { path: 'Results', component: results_component_1.ResultsComponent },
    { path: 'TestsList', component: testslist_component_1.TestsListComponent },
    //   { path: '', pathMatch: 'prefix', redirectTo: 'NewRun' },
    //   { path: '**', component: NewRunComponent }
    { path: '', pathMatch: 'prefix', redirectTo: 'ResultsComponent' },
    { path: '**', component: results_component_1.ResultsComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map