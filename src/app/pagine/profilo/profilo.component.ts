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
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        const existingProfile = this.authService.getUserProfile();
        if (existingProfile) {
          this.profile = existingProfile;
        } else {
          // Se non c'è un profilo esistente, inizializza un profilo vuoto
          this.profile = {
            fullName: '',
            email: '',
            phoneNumber: '',
            birthDate: '',
            address: '',
            description: '',
            profileImage: '',
          };
        }
      } else {
        // Se non c'è un utente loggato, inizializza un profilo vuoto
        this.profile = {
          fullName: '',
          email: '',
          phoneNumber: '',
          birthDate: '',
          address: '',
          description: '',
          profileImage: '',
        };
      }
    });
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
