import { Component, OnInit } from '@angular/core';
import { AuthService, UserProfile } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss'],
})
export class ProfiloComponent implements OnInit {

  profile: UserProfile = {
    fullName: '',
    email: '',
    phoneNumber: '',
    birthDate: '',
    address: '',
    description: '',
    profileImage: '',
  };

  modifica:boolean=false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.modifica=false;
    const existingProfile = this.authService.getUserProfile();
    if (existingProfile) {
      this.profile = existingProfile;
    }
  }

  saveProfile() {
    this.authService.saveUserProfile(this.profile);
    alert('Profile saved successfully!');
    this.modifica=false;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.profile.profileImage = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  modificaProfilo(){
    this.modifica=true;
  }
}
