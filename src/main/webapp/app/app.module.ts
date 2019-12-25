import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { HerbalClinicAngularSharedModule } from 'app/shared/shared.module';
import { HerbalClinicAngularCoreModule } from 'app/core/core.module';
import { HerbalClinicAngularAppRoutingModule } from './app-routing.module';
import { HerbalClinicAngularHomeModule } from './home/home.module';
import { HerbalClinicAngularEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    HerbalClinicAngularSharedModule,
    HerbalClinicAngularCoreModule,
    HerbalClinicAngularHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    HerbalClinicAngularEntityModule,
    HerbalClinicAngularAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class HerbalClinicAngularAppModule {}
