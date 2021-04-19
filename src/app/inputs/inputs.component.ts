import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-inputs",
  templateUrl: "./inputs.component.html",
  styleUrls: ["./inputs.component.css"]
})
export class InputsComponent implements OnInit {
  @Output() onInputChanged: EventEmitter<string>;
  constructor() {
    this.onInputChanged = new EventEmitter();
  }

  ngOnInit(): void {}

  onBtnClick() {
    console.log("Dugme je kliknuto");
    this.onInputChanged.emit("button");
  }
  onCheckBox() {
    console.log("Checkbox je cekiran");
    this.onInputChanged.emit("checkbox");
  }
}
