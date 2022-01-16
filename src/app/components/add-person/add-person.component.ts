import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person: Person = new Person;

  constructor(private service: PersonService, private router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard(){
    this.router.navigate(['/persons'])
  }
  onSubmit(){
    console.log(this.person)
    this.service.addPerson(this.person).subscribe(
      data=>{ console.log(data),
      this.goToDashboard()},
      error=>{ console.log(error)}
    );
  }
}
