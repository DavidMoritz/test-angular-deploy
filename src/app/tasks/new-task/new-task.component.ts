import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  cancel = output<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onSubmitNewTask(info: any) {
    console.log(info);
  }

  onCancel() {
    this.cancel.emit();
  }
}
