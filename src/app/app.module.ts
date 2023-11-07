import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarModule } from './modules/global/side-bar';
import { TopBarModule } from './modules/global/top-bar';
import { BaseComponent } from './ui/base-component/base-component.component';

@NgModule({
  declarations: [AppComponent, BaseComponent],
  imports: [BrowserModule, AppRoutingModule, TopBarModule, SideBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
