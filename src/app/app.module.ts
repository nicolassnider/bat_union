import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DocumentsComponent } from './pages/documents/documents.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ActivitiesComponent,
    CalendarComponent,
    FooterComponent,
    PostComponent,
    ContactComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
