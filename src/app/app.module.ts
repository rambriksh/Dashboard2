import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighprioritygraphComponent } from './highprioritygraph/highprioritygraph.component';
import { MediumPrioritygraphComponent } from './medium-prioritygraph/medium-prioritygraph.component';
import { LowprioritygraphComponent } from './lowprioritygraph/lowprioritygraph.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HighprioritylistComponent } from './highprioritylist/highprioritylist.component';
import { MediumprioritylistComponent } from './mediumprioritylist/mediumprioritylist.component';
import { LowprioritylistComponent } from './lowprioritylist/lowprioritylist.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HighpriorityviewComponent } from './highpriorityview/highpriorityview.component';
import { MediumpriorityviewComponent } from './mediumpriorityview/mediumpriorityview.component';
import { LowpriorityviewComponent } from './lowpriorityview/lowpriorityview.component';
import { UpdatehighprioritylistComponent } from './updatehighprioritylist/updatehighprioritylist.component';
import { PrirityComponent } from './pririty/pririty.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HighprioritygraphComponent,
    MediumPrioritygraphComponent,
    LowprioritygraphComponent,
    HeaderComponent,
    SideNavComponent,
    HighprioritylistComponent,
    MediumprioritylistComponent,
    LowprioritylistComponent,
    HighpriorityviewComponent,
    MediumpriorityviewComponent,
    LowpriorityviewComponent,
    UpdatehighprioritylistComponent,
    PrirityComponent,
  
  ],
  imports: [
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
