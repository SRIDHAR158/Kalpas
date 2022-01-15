import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactComponent } from './contact/contact.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import {SocialLoginModule, GoogleLoginProvider} from 'angularx-social-login';
// import { AuthServiceConfig } from 'angularx-social-login';
import { SocialAuthServiceConfig } from 'angularx-social-login';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';


// const config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('453061785881-7i22unb3c7244iu50mj7038pr1gaguho.apps.googleusercontent.com'),
//   }
// ]);

// export function provideConfig(){
//   return config;
// }

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    // MatCardTitle,
    // MatCardHeader,
    // MatCardSubtitle,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule
    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '453061785881-7i22unb3c7244iu50mj7038pr1gaguho.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
