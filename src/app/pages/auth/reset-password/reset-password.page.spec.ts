import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ResetPasswordPage } from "./reset-password.page";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import {
  MenuController,
  AlertController,
  LoadingController,
} from "@ionic/angular";

describe("ResetPasswordPage", () => {
  let component: ResetPasswordPage;
  let fixture: ComponentFixture<ResetPasswordPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetPasswordPage],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj("AuthService", ["resetPassword"]),
        },
        {
          provide: MenuController,
          useValue: jasmine.createSpyObj("MenuController", ["enable"]),
        },
        {
          provide: AlertController,
          useValue: jasmine.createSpyObj("AlertController", ["create"]),
        },
        {
          provide: LoadingController,
          useValue: jasmine.createSpyObj("LoadingController", ["create"]),
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ResetPasswordPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
