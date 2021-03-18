import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/ex1/models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.css']
})
export class UserUpdateFormComponent implements OnInit {
  public user: User;
  constructor(private $user: UserService) {
    this.user = {
      name: 'morpheus',
      job: 'zion resident'
    }
  }

  ngOnInit(): void {
  }
  public async submitForm(event) {
    event.preventDefault();
    console.log(this.user);
    try {
      const res = await this.$user.update(this.user);
      if (res) {
        console.log(res);
        alert('Usuario actualizado!');
      } else {
        console.error('ERROR');
      }
    } catch (err) {
      console.error(err);
      alert('ERROR');
    }
  }

}
