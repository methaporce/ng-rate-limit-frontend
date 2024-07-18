import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-rate-limit-status',
  templateUrl: './rate-limit-status.component.html',
  styleUrls: ['./rate-limit-status.component.css'],
})
export class RateLimitStatusComponent {
  userId: string = '';
  rateLimitInfo: any;
  remainingAttempts: number = 5; // Adjust this value as per your application logic

  constructor(private taskService: TaskService) {}

  onSubmit() {
    const userIdNumber = parseInt(this.userId, 10);
    this.taskService.getRateLimitInformation(userIdNumber).subscribe({
      next: (data: any) => {
        this.rateLimitInfo = data;
      },
      error: (error: any) => {
        console.error('Error fetching rate limit information', error);
        if (error.status === 429) {
          this.remainingAttempts = 0; // Set remaining attempts to 0 to disable button and show modal
        }
      },
    });
  }

  closeModal() {
    this.rateLimitInfo = null; // Clear rate limit information
    this.userId = ''; // Clear user ID input
    this.remainingAttempts = 5; // Reset remaining attempts (adjust as needed)
  }
}
