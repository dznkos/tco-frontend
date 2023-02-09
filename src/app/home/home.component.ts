import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userCurrent: boolean;
  
  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {

    const token = localStorage.getItem('token')!;
    console.log(token)
    if (token.length > 1) {
      this.userCurrent = true;
    }else {
      this.userCurrent = false;
    }
    console.log(this.userCurrent)
  }

}
