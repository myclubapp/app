import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "app-user-list-item",
  templateUrl: "./user-list-item.component.html",
  styleUrls: ["./user-list-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class UserListItemComponent {
  @Input() profile: any;
  @Input() allowEdit: boolean = false;
  @Input() showDateOfBirth: boolean = false;
  @Input() showRoles: boolean = true;
  @Input() childrenCount: number = 0;

  @Output() open = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  onOpen() {
    this.open.emit();
  }

  onRemove() {
    this.remove.emit();
  }
}
