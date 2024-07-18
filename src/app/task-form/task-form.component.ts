import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  userId: string = '';
  responseMessage: string | undefined;
  flag: boolean = false;

  constructor(private taskService: TaskService) {}

  onSubmit() {
    const userIdNumber = parseInt(this.userId, 10);
    this.taskService.executeTask(userIdNumber).subscribe({
      next: (response: any) => {
        this.responseMessage = response.message;
        console.log(this.responseMessage);
      },
      error: (error: any) => {
        this.responseMessage = error.error.message;
        if (error.status === 429) {
          this.flag = true;
          this.openModal();
        }
      },
    });
  }

  closeModal() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.style.display = 'none';
      modalElement.classList.remove('show');
    }
  }

  openModal(): void {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
    }
  }
}
