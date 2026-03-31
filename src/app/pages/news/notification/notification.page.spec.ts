import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NotificationPage } from "./notification.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { NotificationService } from "src/app/services/firebase/notification.service";
import { ModalController, Platform } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

describe("NotificationPage", () => {
  let component: NotificationPage;
  let fixture: ComponentFixture<NotificationPage>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["getUser$"]);
    authServiceSpy.getUser$.and.returnValue(of(null));

    await TestBed.configureTestingModule({
      declarations: [NotificationPage],
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        {
          provide: NotificationService,
          useValue: jasmine.createSpyObj("NotificationService", [
            "getNotifications",
            "getReadNotifications",
            "toggleNotification",
          ]),
        },
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", [
            "create",
            "dismiss",
            "getTop",
          ]),
        },
        {
          provide: Platform,
          useValue: jasmine.createSpyObj("Platform", ["is"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
