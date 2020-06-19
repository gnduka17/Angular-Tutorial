import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorPageComponent } from './tutor-page/tutor-page.component';
import { ProductListComponent } from './product-list/product-list.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tutorial', component: TutorPageComponent, children: [
    {path: '', component: ProductListComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
