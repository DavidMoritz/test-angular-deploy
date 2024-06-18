import { Component, computed, input, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  select = output<string>();

  avatarPath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });

  onSelectUser() {
    this.select.emit(this.user().name);
  }
}
