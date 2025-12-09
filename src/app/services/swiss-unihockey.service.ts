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
   * Determines the correct season to use based on API response
   * Logic:
   * - Find the highlighted season entry
   * - If the highlighted season year is greater than current year, use fallback (index 1)
   * - Otherwise use the highlighted season
   */
  getCurrentSeason(): Observable<number> {
    return this.getSeasons().pipe(
      map((seasonsResponse) => {
        const currentYear = new Date().getFullYear();

        // Find the highlighted season (current active season)
        const highlightedSeason = seasonsResponse.entries.find(
          (entry) => entry.highlight === true,
        );

        if (!highlightedSeason) {
          console.warn(
            "No highlighted season found, using current year as fallback",
          );
          return currentYear;
        }

        const seasonYear = highlightedSeason.set_in_context.season;

        // If the highlighted season is greater than current year, use fallback entry at index 1
        if (seasonYear > currentYear) {
          const fallbackSeason = seasonsResponse.entries[1];
          if (fallbackSeason && fallbackSeason.highlight === false) {
            return fallbackSeason.set_in_context.season;
          }
          return currentYear;
        }

        return seasonYear;
      }),
      catchError((error) => {
        console.error("Error determining current season:", error);
        return of(new Date().getFullYear());
      }),
    );
  }
}
