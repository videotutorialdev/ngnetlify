import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { adminRoutes } from './admin.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(adminRoutes)],
  declarations: [AdminComponent],
})
export class AdminModule {}
