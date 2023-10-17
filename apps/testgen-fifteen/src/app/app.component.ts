import { Component } from '@angular/core';

@Component({
  selector: 'testgen-fifteen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-fifteen';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
