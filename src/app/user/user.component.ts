import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  @Output() select = new EventEmitter();

  avatarPath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  onSelectUser() {
    this.select.emit(this.id());
  }
}
