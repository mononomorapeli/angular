import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 constructor(private service:ServicesService){}

 products: any[] = [];

 ngOnInit(): void {
  this.service.getProduct().subscribe((results:any) => {
    console.table(results)
    this.products = results
  })
 }
}
