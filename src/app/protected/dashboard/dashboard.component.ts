import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })

}
