import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppareilViewComponent } from "./appareil-view/appareil-view.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthService } from "./services/auth.service";
import { SingleappareilComponent } from './singleappareil/singleappareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from "./services/auth-guard.service";
import { EditappareilComponent } from './editappareil/editappareil.component';
import { UserService } from "./services/user.service";
import { UserlistComponent } from './userlist/userlist.component';
import { NewuserComponent } from './newuser/newuser.component';

const appRoutes: Routes = [
   { path: 'appareils', canActivate:[AuthGuard], component: AppareilViewComponent },
   { path: 'appareils/:id', canActivate:[AuthGuard], component: SingleappareilComponent },
   { path: 'edit', canActivate: [AuthGuard], component: EditappareilComponent },
   { path: 'users', component: UserlistComponent  },
   { path: 'new-user' , component: NewuserComponent},
   { path: 'auth', component: AuthComponent },
   { path: '', component: AppareilViewComponent },
   { path: 'not-found', component: FourOhFourComponent },
   { path: '**', redirectTo:'not-found' }
]

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleappareilComponent,
    FourOhFourComponent,
    EditappareilComponent,
    UserlistComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
