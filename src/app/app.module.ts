import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { UserComponent } from './components/user/user.component';
import { AuthRegistrationComponent } from './components/auth-registration/auth-registration.component';
import { GalleryWrapperComponent } from './components/gallery-wrapper/gallery-wrapper.component';
import { AppRoutesModule } from './app-routes.module';
import { ImageService } from "./services/image.service";

// const appRoutes: Routes = [
// {path: '',redirectTo: "welcome",pathMatch: 'full'},
// {path: 'gallery-wrapper', component: GalleryWrapperComponent},
// {path: 'user', component: UserComponent},
// {path: '**', redirectTo:'/'}
// ];

@NgModule({
  declarations: [
    AppComponent,
    GalleryWrapperComponent,
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
    AppRoutesModule

     // RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
