import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-team-create",
  templateUrl: "./team-create.page.html",
  styleUrls: ["./team-create.page.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TeamCreatePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
