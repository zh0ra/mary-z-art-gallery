import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user/user.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {GalleryWrapperComponent} from './components/gallery-wrapper/gallery-wrapper.component';
import {AuthRegistrationComponent} from './components/auth-registration/auth-registration.component';

const appRoutes: Routes = [
{path: '', redirectTo: "welcome",pathMatch: 'full'},
{path: 'gallery-wrapper', component: GalleryWrapperComponent},
{path: 'app-auth-registration', component: AuthRegistrationComponent},
{path: '**', redirectTo:'/'}
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports:[RouterModule]  
})
export class AppRoutesModule {}
