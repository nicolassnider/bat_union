import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'contact', component:ContactComponent},
  // Agrega más rutas aquí según tus componentes
  //paginas de error
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
