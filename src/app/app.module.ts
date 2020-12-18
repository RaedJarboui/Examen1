import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ShowShoppingComponent } from './show-shopping/show-shopping.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  { path: 'add', component: AddProductComponent },
  { path: 'products', component: HomeComponent },
  { path: 'products/:id', component: DetailsComponent },
  { path: 'show', component: ShowShoppingComponent }
  

];
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    HomeComponent,
    ShowShoppingComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
