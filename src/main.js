import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';

import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import 'angular-ui-router/release/stateEvents';

import animate from 'angular-animate';
import resource from 'angular-resource';

import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

import routes from './routes';
import http from './http';
import auth from './auth';

const app = angular.module('myApp', [
    components,
    services,
    uiRouter,
    defaultRoute,
    angular.module('ui.router.state.events').name,
    dialog,
    resource,
    animate
]);

app.filter('titleCase', () => {
    return function titleCaseFilter(input) {
        if (!input) return '';
        return input[0].toUpperCase() + input.slice(1);
    };
});

//TODO: will need to change to authorized routing at some point
// const link = 'https://pet-store-401.herokuapp.com/api/unauth';
const link = 'https://pet-store-401.herokuapp.com/api';

//constant a value but not a service and it's available before config so you can use
//process.env
app.constant('apiUrl', process.env.API_URL || link);

app.config(http);
app.config(routes);
app.run(auth);