import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:8080/api/ratelimit';

  constructor(private http: HttpClient) {}

  executeTask(userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/${userId}/execute-task`, {});
  }

  getRateLimitInformation(userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/rate-limit-information`, {
      userId,
    });
  }
}
