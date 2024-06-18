import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  cancel = output<void>();

  onSubmitNewTask(info: any) {
    console.log(info);
  }

  onCancel() {
    this.cancel.emit();
  }
}
