import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  action: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params) => {this.action = params['action']}
    )
  }

  ngOnInit() {
  }

}
