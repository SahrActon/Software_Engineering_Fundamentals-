import {NgModule} from '@angular/core';
import {CanDeactivate, Router, RouterModule} from '@angular/router';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserComponent} from './users/user/user.component';
import {ServerComponent} from './servers/server/server.component';
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'users', component: UserComponent, children: [
      {path : ':id/:name', component: UserComponent}
    ]},
  {
    path : 'servers',
    // canActivate: [AuthGuard],
    canActivateChild : [AuthGuard],
    component: ServerComponent, children: [
      {path : ':id', component: ServerComponent, resolve: {server: ServerResolver}},
      {path : ':id:/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]},
  // this allows me to redirect to page not found
  // {path: 'not-found', component: PageNotFoundComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
  {path: '**', redirectTo: '/not-found'}

]

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {


}
