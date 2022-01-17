import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <section class="error section" id="error">
      <h2 class="section-title">Beep Boop</h2>
      <span class="section-subtitle">
        <strong>Error:</strong> 
        Sorry, we're still trying to compute how you landed on this page.
        <br>Try executing the back button or clicking "Home".
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
export class ErrorComponent implements OnInit{

  constructor() {}

  ngOnInit() {
    const activeLinkElements = document.getElementsByClassName('active-link');
    const length = activeLinkElements.length;
    for (let i=0; i<length; i++) {
      const element = activeLinkElements[i];
      element.classList.remove('active-link');
    }
  }

}
