import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-dashboard',
  templateUrl: './form-dashboard.component.html',
  styleUrls: ['./form-dashboard.component.scss']
})
export class FormDashboardComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  routing(op: any) {
    switch (op) {
      case "1":
        this.router.navigate(['/dashboard/spring-boot']);
        break;
      default:
        this.router.navigate(['/dashboard']);
        break;
    }

  }
}
