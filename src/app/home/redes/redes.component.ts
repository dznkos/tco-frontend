import { Component } from '@angular/core';
import { ApitelcoService } from 'src/app/services/apitelco.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {
  stateLoad = false;
  listRedes: any[];

  constructor(private apiService: ApitelcoService){

  }

  ngOnInit(): void {
    this.getRedes();
  }

  getRedes() {
    this.apiService.getConfig2().subscribe(apiResponse => {
      this.stateLoad = true;
      console.log('API Response ==>', apiResponse)
      this.listRedes = apiResponse;
      console.log(this.listRedes);
      console.log(typeof(this.listRedes));
    }, apiErrorResponse => {
      this.stateLoad = false;
      console.log('API Error Response ==>', apiErrorResponse);
    })
  }

}
