import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { SidecontentPageComponent } from './sidecontent-page/sidecontent-page.component';
import { SidecontentPreferencePageComponent } from './sidecontent-preference-page/sidecontent-preference-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'second-page', 
    component: SecondPageComponent,
    children: [
      {
        path: 'details-page',
        component: SidecontentPageComponent
      },
      {
        path: 'preference-page',
        component: SidecontentPreferencePageComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
