import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type NewTask, type Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>();
  id = input.required<string>();
  showAddTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id());
  }

  onClickNewTask() {
    this.showAddTask = true;
  }

  onCloseNewTask() {
    this.showAddTask = false;
  }

  onCompleteTask(completedTask: Task) {
    this.tasksService.removeTask(completedTask.id);
  }
}
