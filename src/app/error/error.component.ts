import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <section class="error section" id="error">
      <h2 class="section-title">Beep Boop</h2>
      <span class="section-subtitle">
        <strong>Error:</strong> 
        Sorry, we're still trying to compute how you landed on this page.
        <br>Try executing the back button or clicking "Monica".
      </span>

      <div class="error-container container">
        <img src="assets/img/robot-idle.gif">

      </div>
    </section>
  `,
  styles: [
    `
    .error-container { 
      display: flex; 
      justify-content: center;
    }
    .section-title {
      margin-bottom: var(--mb-1-5);
    }
    .section-title, 
    strong {
      color:var(--first-color);
    }
    `
  ],
})
export class ErrorComponent {

  constructor() {}

}
