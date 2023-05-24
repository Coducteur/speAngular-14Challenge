import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/data/UserModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user!: User;

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  rue = new FormControl('');
  cp = new FormControl('');
  ville = new FormControl('');

  submit = false;

  createNewUser(): any {
    this.submit = true;
    this.user = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      rue: this.rue.value,
      cp: this.cp.value,
      ville: this.ville.value,
    };
  }
}
