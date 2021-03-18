import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent implements OnInit {

  public user: User;

  constructor(private $user: UserService) { }

  ngOnInit(): void {
    this.user = {
      name: '',
      job: ''
    };
  }

  public async submitForm(event) {
    event.preventDefault();
    try {
      const res = await this.$user.create(this.user);
      if (res) {
        console.log(res);
        alert('Usuario creado!');
      } else {
        console.error('ERROR');
      }
    } catch (err) {
      console.error(err);
      alert('ERROR');
    }
  }

}
