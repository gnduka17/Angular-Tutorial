import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TutorPageComponent } from "./tutor-page/tutor-page.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { IntroGuideComponent } from "./intro-guide/intro-guide.component";
import { NaviGuideComponent } from "./navi-guide/navi-guide.component";
import { GuideComponent } from "./guide/guide.component";
import { CodeExampleComponent } from './code-example/code-example.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "tutorial",
    component: TutorPageComponent,
    children: [
      { path: "", component: ProductListComponent },
      {
        path: "",
        component: GuideComponent,
        outlet: "guide"
      }
    ]
  }
];

@NgModule({
  // declarations: [CodeExampleComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
