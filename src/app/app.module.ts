import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ClassComponent } from './class/class.component';
import { ParentComponent } from './parent/parent.component';



const appRoutes: Routes = [
  {path:"teachers",component:TeacherComponent},
  { path: 'home', component: HomeComponent },
  { path: 'class', component: ClassComponent },
  { path: 'parent', component: ParentComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    HomeComponent,
    NavComponent,
    ClassComponent,
    ParentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    // Don't worry about this space Brilliant
  ],

  exports: [
    RouterModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
