import { TestBed } from "@angular/core/testing";
import { AppPlugin } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";
import { version } from "../../../package.json";
import { BUILD_NUMBER } from "../../environments/build-info";
import { AppVersionService, CAPACITOR_APP } from "./app-version.service";

describe("AppVersionService", () => {
  let appPlugin: jasmine.SpyObj<Pick<AppPlugin, "getInfo">>;

  beforeEach(() => {
    appPlugin = jasmine.createSpyObj("AppPlugin", ["getInfo"]);
    TestBed.configureTestingModule({
      providers: [{ provide: CAPACITOR_APP, useValue: appPlugin }],
    });
  });

  it("im Browser: Version aus package.json, Buildnummer aus der Build-Konstante", async () => {
    spyOn(Capacitor, "isNativePlatform").and.returnValue(false);

    const service = TestBed.inject(AppVersionService);
    await service.ready;

    expect(service.info()).toEqual({ version, build: BUILD_NUMBER });
    expect(appPlugin.getInfo).not.toHaveBeenCalled();
  });

  it("auf dem Gerät: Version und Buildnummer aus dem nativen Bundle", async () => {
    spyOn(Capacitor, "isNativePlatform").and.returnValue(true);
    appPlugin.getInfo.and.resolveTo({
      name: "myclub",
      id: "app.myclub.default",
      version: "9.9.9",
      build: "4711",
    });

    const service = TestBed.inject(AppVersionService);
    expect(service.info()).toEqual({ version, build: BUILD_NUMBER });
    await service.ready;

    expect(service.info()).toEqual({ version: "9.9.9", build: "4711" });
  });

  it("auf dem Gerät ohne Plugin: Build-Konstanten bleiben stehen", async () => {
    spyOn(Capacitor, "isNativePlatform").and.returnValue(true);
    spyOn(console, "warn");
    appPlugin.getInfo.and.rejectWith(new Error("not implemented"));

    const service = TestBed.inject(AppVersionService);
    await service.ready;

    expect(service.info()).toEqual({ version, build: BUILD_NUMBER });
    expect(console.warn).toHaveBeenCalled();
  });
});
