
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
import { AddListComponent } from './components/add-list/add-list.component';
import { EditListComponent } from './components/edit-list/edit-list.component';



//



const configFI = {
  // your Config from firebase
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
    ListItemComponent,
    AddListComponent,
    EditListComponent
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
