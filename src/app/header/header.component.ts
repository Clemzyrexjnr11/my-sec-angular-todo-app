import { AfterViewInit, Component, ViewChild,Input,input, Signal, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  enteredusername:string = '';
  entereduserid:number = parseInt('');

  isAddingNewUser:boolean = false;

  onAddNewUser(){
    this.isAddingNewUser = true;
  }
  onCloseAddNewUser(){
    this.isAddingNewUser = false;
  }
  @ViewChild('addUserForm') userForm!:NgForm;

  onsubmit(username:string,userId:number){
    if(username === ''){
      alert('cannot submit empty field');

    }else if(userId === +''){alert('cannot submit empty field')}
    else{
      alert('sent')

    }
  }

}
