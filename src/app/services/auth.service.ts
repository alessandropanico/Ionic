import { Injectable } from '@angular/core';

export interface UserProfile {
  fullName: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  address: string;
  description: string;
  profileImage: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';
  private usersKey = 'users';
  private currentUserKey = 'currentUser';
  private profileKey = 'userProfile';

  constructor() {}

  register(username: string, password: string): boolean {
    const users = this.getUsers();
    if (users.find((user) => user.username === username)) {
      alert('Registration failed. Username already exists.');
      return false; // Username already exists
    }
    users.push({ username, password });
    localStorage.setItem(this.usersKey, JSON.stringify(users));

    // Automatically log in the user after registration
    const token = 'dummy-token'; // This would be a JWT token in a real app
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.currentUserKey, username);

    alert('Registration successful. You are now logged in.');
    return true;
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      const token = 'dummy-token'; // This would be a JWT token in a real app
      localStorage.setItem(this.tokenKey, token);
      localStorage.setItem(this.currentUserKey, username);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.currentUserKey);
    alert('You have been logged out.');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getCurrentUser(): string | null {
    return localStorage.getItem(this.currentUserKey);
  }

  private getUsers(): { username: string; password: string }[] {
    const usersJson = localStorage.getItem(this.usersKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  //--------------------------------

  getUserProfile(): UserProfile | null {
    const profileJson = localStorage.getItem(this.profileKey);
    return profileJson ? JSON.parse(profileJson) : null;
  }

  saveUserProfile(profile: UserProfile): void {
    localStorage.setItem(this.profileKey, JSON.stringify(profile));
  }
}
