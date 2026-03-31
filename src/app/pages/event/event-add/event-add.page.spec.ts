import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EventAddPage } from "./event-add.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";
import { ModalController, ToastController } from "@ionic/angular";

describe("EventAddPage", () => {
  let component: EventAddPage;
  let fixture: ComponentFixture<EventAddPage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getClubAdminList",
    ]);
    fbServiceSpy.getClubAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [EventAddPage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: EventService,
          useValue: jasmine.createSpyObj("EventService", [
            "setCreateClubEvent",
          ]),
        },
        {
          provide: ModalController,
          useValue: jasmine.createSpyObj("ModalController", [
            "create",
            "dismiss",
          ]),
        },
        {
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EventAddPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
