export interface AllArticles<T> {
  count: number;
  next: string;
  previous?: any;
  results: T;
}
