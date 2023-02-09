import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ApitelcoService } from 'src/app/services/apitelco.service';
const axios = require('axios');

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.css']
})
export class RecargasComponent implements OnInit {

  stateLoad = false;
  listRecargas: any[];

constructor(private apiService: ApitelcoService){

}

ngOnInit(): void {
  this.getRecargas();
}

getRecargas() {
  this.apiService.getConfig().subscribe(apiResponse => {
    this.stateLoad = false;    
    this.listRecargas = apiResponse;
  }, apiErrorResponse => {
     this.stateLoad = true;
  })
  
}

}
