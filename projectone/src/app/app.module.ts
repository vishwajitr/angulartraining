import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component'; // Import ChildComponent
import { ParentComponent } from './parent/parent.component'; // Import ParentComponent

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent, // Declare ChildComponent
    ParentComponent // Declare ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }