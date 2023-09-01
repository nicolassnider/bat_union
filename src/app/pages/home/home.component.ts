import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../../services/get-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  responseData:any;
  constructor(private getServiceService:GetServiceService) {
  }
  ngOnInit(): void {
    this.fetchBatData();
  }
  fetchBatData(){
    this.getServiceService.getBatData().subscribe((response)=>{
      this.responseData = response;
      console.log(this.responseData);
    },
    (error)=>{
      console.error('Request failed with error', error)
    })
  }


}
