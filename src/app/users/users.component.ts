import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { UserModel } from './User-model';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input() user!:UserModel;
  
  @Output() select = new EventEmitter<number>();

  onSelect(){
    this.select.emit(this.user.userid);
    
  }

}
