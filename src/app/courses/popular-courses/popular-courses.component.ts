import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.scss']
})
export class PopularCoursesComponent implements OnInit {
  topFields = [
    {
      fieldName: "Technology",
      areaNames: ["Computer Science", "Information Technology", "Data Science","View All"]
    },
    {
      fieldName: "Bussiness",
      areaNames: ["Bussiness", "Strategy", "Bussiness Administration","View All"]
    },
    {
      fieldName: "Economic",
      areaNames: ["Finance", "Investment", "Fintech","Insurance","View All"]
    },
    {
      fieldName: "Management",
      areaNames: ["Project Management", "Leadership", "Operation Management","Logistics","View All"]
    },
    {
      fieldName: "Healthcare",
      areaNames: ["Pharmacy", "Paramedical", "Nursing","View All"]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
