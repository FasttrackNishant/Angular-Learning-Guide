import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { StyleBindingComponent } from '../../../../02_Intro_Modules/src/app/style-binding/style-binding.component';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.css',
  providers: [StudentServiceService]
})

export class StudentDataComponent {

  // public students = [
  //   { id: 1, name: 'John Doe', age: 20 },
  //   { id: 2, name: 'Priya Sharma', age: 22 },
  // ]

  public students: any;
  constructor(private std: StudentServiceService) {
    this.students = std.getStudents();
    console.log(this.students);

  }
}
