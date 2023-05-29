import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { OrderService } from './../../shared/service/order.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap => {
      const id: number = +paramMap.get('id');
      console.log(id)
    }))
  }

}
