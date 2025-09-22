import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  standalone: true,
  imports: [],
  templateUrl: './template-reference.component.html',
  styleUrl: './template-reference.component.css'
})
export class TemplateReferenceComponent {

  public displayName = '';


  getName(value: string) {
    this.displayName = value ; 
  }

  // getName(value: string) {
  //   console.log(value);
    
  // }

}
