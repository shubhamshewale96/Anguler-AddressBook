import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  personList:Person[]=[];

  constructor(private service:PersonService) { }

  ngOnInit(): void {
    this.getAllPersons();
  }

  getAllPersons(){
    this.service.getAllPerson().subscribe(
      data=>{this.personList=data},
      error=>{console.log(error)}
    );
  }

  onDelete(id:number){
    this.service.deletePerson(id).subscribe(
      data=>{console.log(data)},
      error=>{console.log(error)} );
    this.getAllPersons();
  }
}
