import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
    <div class="fin">
      <span>Fin.</span>
    </div>
    <div class="bg">
      <p class="copy">Built and designed by MonicaKochofar. All rights reserved. &#169;</p>
    </div>
  </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor() {}

  @Input() navigationLinks: any;

}
