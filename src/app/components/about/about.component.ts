import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ) {};
  param: any;
  queryParam: any;
  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.param = this.activatedRoute.snapshot.params['username'];
    this.queryParam = this.activatedRoute.snapshot.queryParams['lastname']
  }
}


// https://fakestoreapi.com/products

// https://back.swap2go.ca/comics