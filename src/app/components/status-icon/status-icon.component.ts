import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: "app-status-icon",
  templateUrl: "./status-icon.component.html",
  styleUrls: ["./status-icon.component.scss"],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class StatusIconComponent {
  @Input() status: boolean | null = null;
  @Input() cancelled: boolean = false;
  @Input() closedEvent: boolean = false;
  @Input() isMember: boolean = true;
  @Input() clickable: boolean = true;
  @Output() iconClick = new EventEmitter<boolean>();

  onIconClick() {
    if (this.clickable && !this.cancelled && !this.closedEvent) {
      this.iconClick.emit(this.status !== true);
    }
  }
}
