import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TutorialComponent} from "./components/tutorial/tutorial.component";
import {LandingComponent} from "./components/landing/landing.component";
import {OnlineComponent} from "./components/online/online.component";
import {OfflineComponent} from "./components/offline/offline.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'tutorial',
    component: TutorialComponent,
  },
  {
    path: 'online',
    component: OnlineComponent,
  },
  {
    path: 'offline',
    component: OfflineComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
