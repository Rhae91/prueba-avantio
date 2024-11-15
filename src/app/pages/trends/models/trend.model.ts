import { TrendProvider } from '../constants/trend-provider.constant';
import {TrendResponse} from "../interfaces/trend-response.interface";

export class Trend {
  id: string;
  title: string;
  body: string[];
  provider: TrendProvider;
  image: string;
  url: string;
  createdAt: Date;

  constructor(trendResponse:TrendResponse) {
      this.id = trendResponse._id;
      this.body = trendResponse.body.split('\n\n');
      this.createdAt = new Date(trendResponse.createdAt);
      this.image = trendResponse.image;
      this.provider = trendResponse.provider as TrendProvider;
      this.title = trendResponse.title;
      this.url = trendResponse.url;
  }

  transformBodyToTextarea() {
    return this.body.join('\n\n');
  }
}
