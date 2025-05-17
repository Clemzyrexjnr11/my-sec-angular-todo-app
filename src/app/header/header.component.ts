import {
  AfterViewInit,
  Component,
  ViewChild,
  Input,
  input,
  Signal,
  signal,
  inject,
  EventEmitter,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, debounceTime, of, throwError } from 'rxjs';
import { afterNextRender, Output } from '@angular/core';
import { DestroyRef } from '@angular/core';
import { UserService } from '../users/user.service';

function usernameContainTag(control: AbstractControl) {
  if (control.value.includes('@')) {
    return of(null);
  }
  else {
    return of({ doesnotContainTag: true });
  }
}

@Component({
  selector: 'app-header',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isAddingNewUser: boolean = false;
  private userservice = inject(UserService)
  @Output() formValue = new EventEmitter();
  onAddNewUser() {
    this.isAddingNewUser = true;
  }
  onCloseAddNewUser() {
    this.isAddingNewUser = false;
  }
  form = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required],
      asyncValidators: [usernameContainTag],
    }),
    userRole: new FormControl('', {validators:[Validators.required]}),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
  });
  onsubmit() {
   let newUser = this.form.value;
   this.formValue.emit(newUser)
   this.form.reset();
  }
}
