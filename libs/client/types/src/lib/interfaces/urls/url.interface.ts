export interface IUrlDocument {
  id: string;
  shortUrl: string;
  longUrl: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  metadata?: {
    description?: string;
    image?: string;
    title?: string;
  };
}
