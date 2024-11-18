import { TrendProvider } from '../constants/trend-provider.constant';
import {TrendResponse} from "../interfaces/trend-response.interface";

export class Trend {
  id: string;
  title: string;
  body: string;
  provider: TrendProvider;
  image: string;
  url: string;
  // createdAt: Date;

  constructor(trendResponse:TrendResponse) {
      this.id = trendResponse._id;
      this.body = trendResponse.body;
      // this.createdAt = trendResponse.createdAt ? new Date(trendResponse.createdAt) : new Date();
      this.image = trendResponse.image;
      this.provider = trendResponse.provider as TrendProvider;
      this.title = trendResponse.title;
      this.url = trendResponse.url;
  }

  getParagraphs(index?: number): string[] {
    return this.body.split('\n\n');
  }

  getFirstParagragh(): string {
    return this.body.split('\n\n')[0];
  }

  generateId() {
    const timestamp = Math.floor(new Date().getTime() / 1000).toString(16);
    const randomPart = Array(16)
      .fill(null)
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('');
    this.id = timestamp + randomPart;
  }
}
