import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from './content/content.component'
import {AboutComponent} from './content/about/about.component'
import {ContactComponent} from './content/contact/contact.component'

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

  // { path: '', component: ContentComponent},
  // { path: 'content', component: ContentComponent,
  //   children : [
  //     { path: 'contact', component: ContactComponent },
  //   ]},
 
  // { path: '**', redirectTo: '', pathMatch: 'full' }


];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
