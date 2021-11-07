import { ArticleEntity } from '../article.entity';

export interface AllArticlesResponseInterface {
  articles: ArticleEntity[];
  articlesCount: number;
}
