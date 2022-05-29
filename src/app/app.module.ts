import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component'
import { HeaderComponent } from './content/header/header.component'
import { HomeComponent } from './content/home/home.component'
import { AboutComponent } from './content/about/about.component'
import { ExperienceComponent } from './content/experience/experience.component'
import { SkillsComponent } from './content/skills/skills.component'
import { EducationComponent } from './content/education/education.component'
import { ContactComponent } from './content/contact/contact.component'
import { FooterComponent } from './content/footer/footer.component';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
