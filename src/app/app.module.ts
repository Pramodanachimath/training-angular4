import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';

import { FormsModule } from '@angular/forms';
import { TrialComponent } from './trial/trial.component';
import { DirectComponent } from './direct/direct.component';
import { DirectoneComponent } from './directone/directone.component';
import { TitlePipe } from './pipes/title.pipe';
import { AttrDirectComponent } from './attr-direct/attr-direct.component';
import { CourseparentComponent } from './courseparent/courseparent.component';
import { CoursechildComponent } from './coursechild/coursechild.component';
import { ShadowComponent } from './shadow/shadow.component';
import { DetailsComponent } from './details/details.component';
import { CompParentComponent } from './comp-parent/comp-parent.component';
import { CompChildComponent } from './comp-child/comp-child.component';
import { CourseComponent } from './course/course.component';
import { FilterPipe } from './pipes/filter.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TrialComponent,
    DirectComponent,
    DirectoneComponent,
    TitlePipe,
    AttrDirectComponent,
    CourseparentComponent,
    CoursechildComponent,
    ShadowComponent,
    DetailsComponent,
    CompParentComponent,
    CompChildComponent,
    CourseComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
