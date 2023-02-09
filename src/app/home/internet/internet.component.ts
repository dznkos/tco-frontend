import { Component } from '@angular/core';
import { ApitelcoService } from 'src/app/services/apitelco.service';

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.css']
})
export class InternetComponent {

  stateLoad = false;
  listInternet: any[];

  constructor(private apiService: ApitelcoService){
  }
  ngOnInit(): void {
    this.getInternet();
  }

  getInternet() {
    this.apiService.getConfig3().subscribe(apiResponse => {
      this.stateLoad = true;
      console.log('API Response ==>', apiResponse)
      this.listInternet = apiResponse;
      console.log(this.listInternet);
      console.log(typeof(this.listInternet));
    }, apiErrorResponse => {
      this.stateLoad = false;
      console.log('API Error Response ==>', apiErrorResponse);
    })
  }
}
