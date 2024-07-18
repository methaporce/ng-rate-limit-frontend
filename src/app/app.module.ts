import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { RateLimitStatusComponent } from './rate-limit-status/rate-limit-status.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';

@NgModule({
  declarations: [AppComponent, TaskFormComponent, RateLimitStatusComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
