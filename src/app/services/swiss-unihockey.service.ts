import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map, catchError, of } from "rxjs";

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
   * Determines the correct season to use based on current date and API response
   * Logic:
   * - If we're in 2025 and API shows 2025/26 as highlighted, use 2025
   * - If we're in 2026 but before April, use 2025 (previous season)
   * - If we're in 2026 and after April, use 2026
   */
  getCurrentSeason(): Observable<number> {
    return this.getSeasons().pipe(
      map((seasonsResponse) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11

        // Find the highlighted season (current active season)
        const highlightedSeason = seasonsResponse.entries.find(
          (entry) => entry.highlight,
        );

        if (!highlightedSeason) {
          // Fallback: use current year if no highlighted season found
          console.warn(
            "No highlighted season found, using current year as fallback",
          );
          return currentYear;
        }

        const highlightedSeasonYear = highlightedSeason.set_in_context.season;

        // If we're in the same year as the highlighted season, use it
        if (currentYear === highlightedSeasonYear) {
          return highlightedSeasonYear;
        }

        // If we're in the next year but before April, use the previous year
        if (currentYear === highlightedSeasonYear + 1 && currentMonth < 4) {
          return highlightedSeasonYear;
        }

        // If we're in the next year and after April, use current year
        if (currentYear === highlightedSeasonYear + 1 && currentMonth >= 4) {
          return currentYear;
        }

        // For any other case, use the highlighted season year
        return highlightedSeasonYear;
      }),
      catchError((error) => {
        console.error("Error determining current season:", error);
        // Fallback to current year
        return of(new Date().getFullYear());
      }),
    );
  }
}
