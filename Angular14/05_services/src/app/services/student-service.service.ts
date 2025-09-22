import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }

  getStudents() {
    return [
      { id: 1, name: 'John Doe', age: 20 },
      { id: 2, name: 'Priya Sharma', age: 22 },
    ]
  }
}
