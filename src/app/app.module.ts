import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector , CUSTOM_ELEMENTS_SCHEMA, ApplicationRef} from '@angular/core';
import { HttpModule} from '@angular/http';
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
import { StackblitzTipsComponent } from './stackblitz-tips/stackblitz-tips.component';
import { IntroStep1Component } from './intro-step1/intro-step1.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { CodeExampleComponent } from './code-example/code-example.component';
import { createCustomElement } from '@angular/elements';

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
    DeployGuideComponent,
    StackblitzTipsComponent,
    IntroStep1Component,
    TemplateSyntaxComponent,
    CodeExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpModule,
    RouterModule.forRoot([
      // { path: '', component: ProductListComponent },
    ])
  ],
  entryComponents: [CodeExampleComponent],
  providers: [GuideStatesService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: []
})
export class AppModule {
   constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    const customButton = createCustomElement(CodeExampleComponent, { injector:this.injector });
    customElements.define('copy-code', customButton);
    appRef.bootstrap(AppComponent);
  }
}
