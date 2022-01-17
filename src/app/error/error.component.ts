import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <section class="error section" id="error">
      <h2 class="section-title">Beep Boop</h2>
      <span class="section-subtitle">
        Error: We're trying to compute how you landed on this page.
        Try executing the back button.
      </span>

      <div class="error-container container">
        <img src="assets/img/robot-idle.gif">

      </div>
    </section>
  `,
  styles: ['.error-container { display: flex; justify-content: center; }'],
})
export class ErrorComponent {


}
