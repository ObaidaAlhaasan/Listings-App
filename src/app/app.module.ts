
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireAuth } from 'angularfire2/auth';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { UserService } from './services/user.service';
import { RegisterComponent } from './components/register/register.component';
import { ListItemComponent } from './components/list-item/list-item.component';



//



const configFI = {
  apiKey: 'AIzaSyA1DM-P8MNgJPPx1VUD6hTfQgB7uJ7jQaQ',
  authDomain: 'listings-app-616.firebaseapp.com',
  databaseURL: 'https://listings-app-616.firebaseio.com',
  projectId: 'listings-app-616',
  storageBucket: 'listings-app-616.appspot.com',
  messagingSenderId: '468933459655'
};
//
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    NoPageFoundComponent,
    HomeComponent,
    ListingsComponent,
    RegisterComponent,
    ListItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlashMessagesModule,
    FormsModule,
    AngularFireModule.initializeApp(configFI),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AngularFireAuth, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
