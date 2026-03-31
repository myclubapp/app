import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrainingCreatePage } from "./training-create.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { TrainingService } from "src/app/services/firebase/training.service";
import { UiService } from "src/app/services/ui.service";
import {
  ModalController,
  AlertController,
  ToastController,
} from "@ionic/angular";

describe("TrainingCreatePage", () => {
  let component: TrainingCreatePage;
  let fixture: ComponentFixture<TrainingCreatePage>;

  beforeEach(async () => {
    const fbServiceSpy = jasmine.createSpyObj("FirebaseService", [
      "getTeamAdminList",
    ]);
    fbServiceSpy.getTeamAdminList.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [TrainingCreatePage],
      imports: [TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj("AuthService", ["getUser$"]),
        },
        { provide: FirebaseService, useValue: fbServiceSpy },
        {
          provide: TrainingService,
          useValue: jasmine.createSpyObj("TrainingService", [
            "setCreateTraining",
          ]),
        },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj("UiService", [
            "showSuccessToast",
            "showErrorToast",
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
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
        {
          provide: ToastController,
          useValue: jasmine.createSpyObj("ToastController", ["create"]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingCreatePage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
