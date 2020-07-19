import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Home2Component } from './component/home2/home2.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeService } from './service/home.service';
import { GestoreOrgComponent } from './component/gestore-org/gestore-org.component';
import { AlberoComponent } from './component/albero/albero.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MenuComponent } from './component/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OrganigrammaService } from './service/organigramma.service';
import { TabellaDipComponent } from './component/tabella-dip/tabella-dip.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,
    GestoreOrgComponent,
    AlberoComponent,
    MenuComponent,
    TabellaDipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    MatSelectModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [HomeService, OrganigrammaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
