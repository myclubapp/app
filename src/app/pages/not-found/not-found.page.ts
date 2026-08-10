import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.page.html",
  styleUrls: ["./not-found.page.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class NotFoundPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
