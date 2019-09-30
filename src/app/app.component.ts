import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h2>Inside Angular</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia soluta
      ad architecto. Fugiat, placeat alias deleniti blanditiis accusantium
      reiciendis suscipit culpa, minus, eius veritatis esse. Eaque rem doloribus
      dolor.
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "angular-demo-app-es5";
}
