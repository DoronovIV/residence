import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarModule } from './modules/global/side-bar';
import { TopBarModule } from './modules/global/top-bar';
import { StatusCellComponent } from './modules/ui/status-cell/status-cell.component';

@NgModule({
  declarations: [AppComponent, StatusCellComponent],
  imports: [BrowserModule, AppRoutingModule, TopBarModule, SideBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
