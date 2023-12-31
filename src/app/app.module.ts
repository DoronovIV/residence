import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarModule } from './modules/global/side-bar';
import { TopBarModule } from './modules/global/top-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TopBarModule, SideBarModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
