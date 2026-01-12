import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";

export interface SeasonEntry {
  text: string;
  set_in_context: {
    season: number;
  };
  entries: any[];
  highlight: boolean;
}

export interface SeasonsResponse {
  type: string;
  text: string;
  resource: string;
  entries: SeasonEntry[];
  levels: string[];
  highlight: boolean;
}

@Injectable({
  providedIn: "root",
})
export class SwissUnihockeyService {
  private readonly API_BASE_URL = "https://api-v2.swissunihockey.ch/api";

  constructor(private http: HttpClient) {}

  /**
   * Fetches available seasons from Swiss Unihockey API
   */
  getSeasons(): Observable<SeasonsResponse> {
    return this.http.get<SeasonsResponse>(`${this.API_BASE_URL}/seasons`).pipe(
      catchError((error) => {
        console.error(
          "Error fetching seasons from Swiss Unihockey API:",
          error,
        );
        return of({
          type: "dropdown",
          text: "Saison",
          resource: "/seasons",
          entries: [],
          levels: ["Saison"],
          highlight: false,
        });
      }),
    );
  }

  /**
   * Determines the correct season based on current date
   * Logic:
   * - Months 6-12 (June-December): season = current year
   * - Months 1-5 (January-May): season = previous year
   * This reflects that Swiss Unihockey seasons run from August to May
   */
  getCurrentSeason(): Observable<number> {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() is 0-indexed

    const seasonYear = currentMonth >= 6 ? currentYear : currentYear - 1;
    return of(seasonYear);
  }
}
