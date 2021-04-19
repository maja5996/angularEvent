import { Component } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "dogadjaj";

  private noClicks: number = 0;
  private noChanges: number = 0;

  updateCount(changeInput: string) {
    if (changeInput == "button") {
      this.noClicks += 1;
    } else if (changeInput == "checkbox") {
      this.noChanges += 1;
    }
  }
}
