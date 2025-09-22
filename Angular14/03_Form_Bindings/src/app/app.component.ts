import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateReferenceComponent } from "./template-reference/template-reference.component";
import { CounterAppComponent } from "./counter-app/counter-app.component";
import { TwoWayComponent } from "./two-way/two-way.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateReferenceComponent, CounterAppComponent, TwoWayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '03_Form_Bindings';
}
