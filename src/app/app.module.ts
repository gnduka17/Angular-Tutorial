import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TutorPageComponent } from './tutor-page/tutor-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { IntroGuideComponent } from './intro-guide/intro-guide.component';
import { NaviGuideComponent } from './navi-guide/navi-guide.component';
import { GuideComponent } from './guide/guide.component';
import { GuideStatesService } from './guide-states.service';
import { ManageDataGuideComponent } from './manage-data-guide/manage-data-guide.component';
import { UserFormsGuideComponent } from './user-forms-guide/user-forms-guide.component';
import { DeployGuideComponent } from './deploy-guide/deploy-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TutorPageComponent,
    ProductListComponent,
    TopBarComponent,
    IntroGuideComponent,
    NaviGuideComponent,
    GuideComponent,
    ManageDataGuideComponent,
    UserFormsGuideComponent,
    DeployGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      // { path: '', component: ProductListComponent },
    ])
  ],
  providers: [GuideStatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
