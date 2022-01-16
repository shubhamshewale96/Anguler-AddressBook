import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  person:Person = new Person();
  id!:number;
  constructor(private service: PersonService, private route : ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.service.getPersonById(this.id).subscribe(
      data=>{ this.person = data},
      error=>{ console.log(error)}
    )
  }

  onSubmit(){
    this.service.updatePerson(this.id, this.person).subscribe( 
      data=>{ this.goToDashboard()},
      error=>{ console.log(error)}
    );
  }

  goToDashboard(){
    this.router.navigate(['/persons'])
  }
}
