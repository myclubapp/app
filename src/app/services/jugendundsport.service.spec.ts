import { TestBed } from "@angular/core/testing";
import { JugendundsportService } from "./jugendundsport.service";
import { TrainingService } from "./firebase/training.service";
import { ChampionshipService } from "./firebase/championship.service";
import { FirebaseService } from "./firebase.service";
import { UserProfileService } from "./firebase/user-profile.service";
import { UiService } from "./ui.service";
import { ExportService } from "./export.service";
import { TranslateModule } from "@ngx-translate/core";

describe("JugendundsportService", () => {
  let service: JugendundsportService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        JugendundsportService,
        {
          provide: TrainingService,
          useValue: jasmine.createSpyObj("TrainingService", [
            "getTeamTrainingsRefs",
          ]),
        },
        {
          provide: ChampionshipService,
          useValue: jasmine.createSpyObj("ChampionshipService", [
            "getTeamGamesRef",
          ]),
        },
        {
          provide: FirebaseService,
          useValue: jasmine.createSpyObj("FirebaseService", [
            "getTeamMemberRefs",
          ]),
        },
        {
          provide: UserProfileService,
          useValue: jasmine.createSpyObj("UserProfileService", [
            "getUserProfileById",
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
          provide: ExportService,
          useValue: jasmine.createSpyObj("ExportService", ["exportMembers"]),
        },
      ],
    });
    service = TestBed.inject(JugendundsportService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
