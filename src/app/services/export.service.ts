import { Injectable } from "@angular/core";
import { UiService } from "./ui.service";
import { TranslateService } from "@ngx-translate/core";
import { lastValueFrom } from "rxjs";
import { Capacitor } from "@capacitor/core";
import { Filesystem, Directory, Encoding } from "@capacitor/filesystem";
import { Share } from "@capacitor/share";
import * as XLSX from "xlsx";
import { Club } from "../models/club";

export interface MemberExportOptions {
  includeAddress: boolean;
  includeBirthdate: boolean;
  includePhone: boolean;
  includeEmail: boolean;
  includeTeams: boolean;
  includeFunctions: boolean;
}

export interface MemberWithTeams {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phonenumber?: number;
  dateOfBirth?: { seconds: number };
  streetAndNumber?: string;
  postalcode?: number;
  city?: string;
  roles?: string[];
  teams?: string[];
}

@Injectable({
  providedIn: "root",
})
export class ExportService {
  constructor(
    private readonly uiService: UiService,
    private readonly translate: TranslateService,
  ) {}

  /**
   * Platform-aware CSV download method
   * Works on both web browsers and native mobile platforms
   */
  async downloadCSV(
    csvContent: string,
    fileName: string,
    successMessage: string,
  ): Promise<void> {
    try {
      if (Capacitor.isNativePlatform()) {
        // For mobile apps: Save to temp file and share
        await this.shareFileNative(csvContent, fileName, "text/csv");
      } else {
        // For web browsers: Traditional download
        const blob = new Blob([csvContent], {
          type: "text/csv;charset=utf-8;",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        link.style.visibility = "hidden";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }

      await this.uiService.showSuccessToast(
        await lastValueFrom(this.translate.get(successMessage)),
      );
    } catch (error) {
      console.error("Error downloading CSV file:", error);
      await this.uiService.showErrorToast(
        await lastValueFrom(this.translate.get("common.export_error")),
      );
    }
  }

  /**
   * Platform-aware Excel download method
   * Works on both web browsers and native mobile platforms
   */
  async downloadExcel(
    workbook: XLSX.WorkBook,
    fileName: string,
    successMessage: string,
  ): Promise<void> {
    try {
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      if (Capacitor.isNativePlatform()) {
        // For mobile apps: Save to temp file and share
        // Convert ArrayBuffer to base64
        const uint8Array = new Uint8Array(excelBuffer);
        let binary = "";
        for (let i = 0; i < uint8Array.length; i++) {
          binary += String.fromCharCode(uint8Array[i]);
        }
        const base64Data = btoa(binary);
        await this.shareFileNativeBase64(
          base64Data,
          fileName,
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        );
      } else {
        // For web browsers: Traditional download
        const blob = new Blob([excelBuffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        link.style.visibility = "hidden";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }

      await this.uiService.showSuccessToast(
        await lastValueFrom(this.translate.get(successMessage)),
      );
    } catch (error) {
      console.error("Error downloading Excel file:", error);
      await this.uiService.showErrorToast(
        await lastValueFrom(this.translate.get("common.export_error")),
      );
    }
  }

  /**
   * Helper method to share a text file on native platforms
   */
  private async shareFileNative(
    content: string,
    fileName: string,
    mimeType: string,
  ): Promise<void> {
    // Write file to cache directory
    const result = await Filesystem.writeFile({
      path: fileName,
      data: content,
      directory: Directory.Cache,
    });

    // Share the file
    await Share.share({
      title: fileName,
      url: result.uri,
    });

    // Clean up: delete the temp file after a delay
    setTimeout(async () => {
      try {
        await Filesystem.deleteFile({
          path: fileName,
          directory: Directory.Cache,
        });
      } catch {
        // Ignore cleanup errors
      }
    }, 60000); // Delete after 1 minute
  }

  /**
   * Helper method to share a binary file (base64) on native platforms
   */
  private async shareFileNativeBase64(
    base64Data: string,
    fileName: string,
    mimeType: string,
  ): Promise<void> {
    // Write file to cache directory
    const result = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Cache,
    });

    // Share the file
    await Share.share({
      title: fileName,
      url: result.uri,
    });

    // Clean up: delete the temp file after a delay
    setTimeout(async () => {
      try {
        await Filesystem.deleteFile({
          path: fileName,
          directory: Directory.Cache,
        });
      } catch {
        // Ignore cleanup errors
      }
    }, 60000); // Delete after 1 minute
  }

  /**
   * Export club members to Excel with configurable fields
   */
  async exportMembers(
    members: MemberWithTeams[],
    club: Club,
    options: MemberExportOptions,
  ): Promise<void> {
    if (!members || members.length === 0) {
      await this.uiService.showErrorToast(
        await lastValueFrom(this.translate.get("club-member-list.no_members")),
      );
      return;
    }

    try {
      // Build headers based on selected options
      const headers: string[] = [
        await lastValueFrom(this.translate.get("common.firstName")),
        await lastValueFrom(this.translate.get("common.lastName")),
      ];

      if (options.includeEmail) {
        headers.push(await lastValueFrom(this.translate.get("common.email")));
      }
      if (options.includePhone) {
        headers.push(await lastValueFrom(this.translate.get("common.phone")));
      }
      if (options.includeBirthdate) {
        headers.push(
          await lastValueFrom(this.translate.get("common.dateOfBirth")),
        );
      }
      if (options.includeAddress) {
        headers.push(
          await lastValueFrom(this.translate.get("common.street")),
          await lastValueFrom(this.translate.get("common.postalCode")),
          await lastValueFrom(this.translate.get("common.city")),
        );
      }
      if (options.includeTeams) {
        headers.push(await lastValueFrom(this.translate.get("common.teams")));
      }
      if (options.includeFunctions) {
        headers.push(
          await lastValueFrom(this.translate.get("common.functions")),
        );
      }

      // Build data rows
      const data: (string | number)[][] = members.map((member) => {
        const row: (string | number)[] = [
          member.firstName || "",
          member.lastName || "",
        ];

        if (options.includeEmail) {
          row.push(member.email || "");
        }
        if (options.includePhone) {
          row.push(member.phonenumber ? String(member.phonenumber) : "");
        }
        if (options.includeBirthdate) {
          row.push(
            member.dateOfBirth
              ? new Date(member.dateOfBirth.seconds * 1000).toLocaleDateString(
                  "de-CH",
                )
              : "",
          );
        }
        if (options.includeAddress) {
          row.push(member.streetAndNumber || "");
          row.push(member.postalcode ? String(member.postalcode) : "");
          row.push(member.city || "");
        }
        if (options.includeTeams) {
          row.push(member.teams?.join(", ") || "");
        }
        if (options.includeFunctions) {
          row.push(member.roles?.join(", ") || "");
        }

        return row;
      });

      // Create worksheet
      const worksheetData = [headers, ...data];
      const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

      // Set column widths
      const colWidths = headers.map((header) => ({
        wch: Math.max(header.length + 2, 15),
      }));
      worksheet["!cols"] = colWidths;

      // Create workbook
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        await lastValueFrom(this.translate.get("common.members")),
      );

      // Generate filename
      const date = new Date().toISOString().split("T")[0];
      const clubName = club.name.replace(/[^a-zA-Z0-9]/g, "_");
      const fileName = `Mitglieder_${clubName}_${date}.xlsx`;

      await this.downloadExcel(
        workbook,
        fileName,
        "club-member-list.export_success",
      );
    } catch (error) {
      console.error("Error exporting members:", error);
      await this.uiService.showErrorToast(
        await lastValueFrom(
          this.translate.get("club-member-list.export_error"),
        ),
      );
    }
  }
}
