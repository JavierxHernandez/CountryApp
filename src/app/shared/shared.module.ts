import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {AboutPageComponent} from './pages/about-page/about-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SideBarComponent,
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
