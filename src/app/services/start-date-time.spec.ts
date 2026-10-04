import { startDateTime } from "./start-date-time";

describe("startDateTime", () => {
  const ts = (d: Date) => ({ toDate: () => new Date(d.getTime()) });

  it("takes hours and minutes from an ISO timeFrom", () => {
    const date = new Date(2026, 9, 4, 0, 0);
    const timeFrom = new Date(2026, 0, 1, 18, 30).toISOString();

    const start = startDateTime(ts(date), timeFrom);

    expect(start.getFullYear()).toBe(2026);
    expect(start.getMonth()).toBe(9);
    expect(start.getDate()).toBe(4);
    expect(start.getHours()).toBe(18);
    expect(start.getMinutes()).toBe(30);
  });

  it("does not read the year as the hour", () => {
    const timeFrom = new Date(2026, 0, 1, 9, 15).toISOString();

    const start = startDateTime(ts(new Date(2026, 9, 4)), timeFrom);

    expect(start.getHours()).toBe(9);
  });

  it("keeps date as is when timeFrom is missing or invalid", () => {
    const date = new Date(2026, 9, 4, 19, 45);

    expect(startDateTime(ts(date), undefined).getTime()).toBe(date.getTime());
    expect(startDateTime(ts(date), "kaputt").getTime()).toBe(date.getTime());
  });
});
