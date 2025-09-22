import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  stepList: any[] = [
    {
      stepName: "Basic Details",
      isComplete: false
    },
    {
      stepName: "Skills",
      isComplete: false
    },
    {
      stepName: "Experience",
      isComplete: false
    }
  ]

  activeStep: any = this.stepList[0];

  setActiveState(activeStep: any) {
    this.activeStep = activeStep;
  }


  employeeObj: any =
    {
      "roleId": 0,
      "empId": 0,
      "empName": "",
      "empEmailId": "",
      "empDesignationId": 0,
      "empContactNo": 0,
      "empAltContactNo": 0,
      "empPersonalEmailId": 0,
      "empExpTotalYear": 0,
      "empExpTotalMonth": 0,
      "empCity": "",
      "empState": "",
      "empPinCode": "",
      "empAddress": "",
      "empPerCity": "",
      "empPerState": "",
      "empPerPinCode": "",
      "empPerAddress": "",
      "password": "",
      ErpEmployeeSkills: [],
      ErmEmpExperiences: []

    }
    
  addSkills() {
    const skillObj =
    {
      "empSkillId": 0,
      "empId": 0,
      "skill": "",
      "totalYearExp": 0,
      "lastVersionUsed": ""
    }
    this.employeeObj.ErpEmployeeSkills.unshift(skillObj);
  }

  addExp() {
    const expObj =
    {
      "empExpId": 0,
      "empId": 0,
      "companyName": "",
      "startDate": "2024-03-05T16:58:07.710Z",
      "endDate": "2024-03-05T16:58:07.710Z",
      "designation": "",
      "projectsWorkedOn": ""
    }

    this.employeeObj.ErmEmpExperiences.unshift(expObj);
  }


}
