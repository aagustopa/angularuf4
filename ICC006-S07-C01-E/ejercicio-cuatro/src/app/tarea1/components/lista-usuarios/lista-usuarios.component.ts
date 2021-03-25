import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  public user:User;

  constructor(private $user: UserService) {
    this.user={
      first_name:'',
      last_name:''
    }
  }

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    const response = await this.$user.getUsers();
    console.log(response.data);
  }

}
