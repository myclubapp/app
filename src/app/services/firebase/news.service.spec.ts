import { TestBed } from "@angular/core/testing";
import { NewsService } from "./news.service";
import { Firestore } from "@angular/fire/firestore";
import { Injector } from "@angular/core";

describe("NewsService", () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NewsService,
        { provide: Firestore, useValue: {} },
        {
          provide: Injector,
          useValue: jasmine.createSpyObj("Injector", ["get"]),
        },
      ],
    });
    service = TestBed.inject(NewsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
