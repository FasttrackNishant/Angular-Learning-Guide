import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  name:string;
  age :number;
  today: Date;
  img : string;

  ngOnInit(): void {
    this.name = "John Doe";
    this.age = 34;
    this.today = new Date();
    this.img = "../../assets/images/Image.jpg"
  }

}
