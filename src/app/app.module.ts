import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserComponent } from './components/user/user.component';
import { AuthRegistrationComponent } from './components/auth-registration/auth-registration.component';
import { GalleryWrapperComponent } from './components/gallery-wrapper/gallery-wrapper.component';
import { ImageService } from "./services/image.service";

import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
{path: '', redirectTo: "home",pathMatch: 'full'},
{path:'home', component: WelcomeComponent},
{path: 'gallery-wrapper', component: GalleryWrapperComponent},
{path: 'app-auth-registration', component: AuthRegistrationComponent},
{path: '**', redirectTo:'/'}
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent, 
    WelcomeComponent,
    UserComponent,
    AuthRegistrationComponent,
    GalleryWrapperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
