import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from "@angular/core";

import { IonicModule } from "@ionic/angular";

@Component({
  selector: "app-status-icon",
  templateUrl: "./status-icon.component.html",
  styleUrls: ["./status-icon.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IonicModule],
})
export class StatusIconComponent {
  @Input() status: boolean | null = null;
  @Input() cancelled: boolean = false;
  @Input() closedEvent: boolean = false;
  @Input() isMember: boolean = true;
  @Input() hasChildren: boolean = false;
  @Input() clickable: boolean = true;
  @Output() iconClick = new EventEmitter<boolean>();

  onIconClick() {
    if (this.clickable && !this.cancelled && !this.closedEvent) {
      this.iconClick.emit(this.status !== true);
    }
  }
}
