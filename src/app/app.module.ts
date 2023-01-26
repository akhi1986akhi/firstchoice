import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CopyrightComponent } from './shared/copyright/copyright.component';
import { HomeComponent } from './home/home/home.component';
import { WelcomeMsgComponent } from './home/welcome-msg/welcome-msg.component';
import { WhyFirstChoiceComponent } from './home/why-first-choice/why-first-choice.component';
import { FeaturesComponent } from './home/features/features.component';
import { TopCoursesComponent } from './home/top-courses/top-courses.component';
import { CareerComponent } from './home/career/career.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { PopularCoursesComponent } from './courses/popular-courses/popular-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    CopyrightComponent,
    HomeComponent,
    WelcomeMsgComponent,
    WhyFirstChoiceComponent,
    FeaturesComponent,
    TopCoursesComponent,
    CareerComponent,
    TestimonialsComponent,
    ContactComponent,
    AboutComponent,
    CoursesComponent,
    PopularCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
