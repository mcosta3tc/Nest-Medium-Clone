import { ArticleEntity } from '../article.entity';

export interface AllArticlesResponseInterface {
  allArticles: ArticleEntity[];
  allArticlesCount: number;
}
