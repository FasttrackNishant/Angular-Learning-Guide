import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  standalone: true,
  imports: [],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.css'
})
export class TwoWayComponent {
  public name = "jane";
}
