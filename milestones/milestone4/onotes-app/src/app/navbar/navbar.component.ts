import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {
  }

  searchForm = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });

  handleSearch() {
    if (this.searchForm.valid) {
      this.router.navigateByUrl('/search/' + this.searchForm.value.search);
    }
  }
}
