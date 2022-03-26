import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ViewTableComponent } from './view-table/view-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicineModule } from './medicine/medicine.module';

@NgModule({
  declarations: [AppComponent, ViewTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule, 
    HttpClientModule,
    MedicineModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
