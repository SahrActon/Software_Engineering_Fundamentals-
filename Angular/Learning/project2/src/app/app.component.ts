import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  showSecret = false;
  countClick = [];

  onRestUsernme() {
    if (this.userName != null) {
      this.userName = (<HTMLInputElement>event.target).value = '';
    } else {
      return alert('Cannot reset an empty user name');
    }
  }

  onSetUserName() {
    return alert('Submitted!');
  }
  onToggleDetails () {
    this.showSecret = !this.showSecret;
    this.countClick.push(this.countClick.length + 1);
  }

  // Allows me to show the user name as the user types it in
  onUpdateUserName (event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }



}
