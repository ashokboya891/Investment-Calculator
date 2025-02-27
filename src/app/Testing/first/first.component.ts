import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private router:Router) {
    
  }

  user = { name: '', email: '' };

  userForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl('')
  });

  onSubmit() {
    console.log('Form Submitted:', this.userForm.value);
  }


  sendData()
  {
    const id=90;
    this.router.navigate(['/second',id]);
  }
  onSubmit1() {
    console.log('Template-Driven Form Submitted:', this.user);
  }
}
