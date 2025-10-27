export interface ClubLink {
  id: string;
  order: number;
  title: string;
  description: string;
  type: "web" | "image" | "pdf";
  url: string;
  showOnCard: boolean;
  createdAt: Date;
  updatedAt: Date;
}
