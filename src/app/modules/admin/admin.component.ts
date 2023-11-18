import { Component } from '@angular/core';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  public menus: Array<{
    name: string;
    routerLink: string;
  }> = [
    {
      name: 'Dashboard',
      routerLink: '/dashboard',
    },
    {
      name: 'Posts',
      routerLink: '/posts',
    },
    {
      name: 'Users',
      routerLink: '/users',
    },
  ];
}
