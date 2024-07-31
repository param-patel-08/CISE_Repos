import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/articles')
  getArticles(): any[] {
    console.log('getArticles endpoint hit');
    return ARTICLES;
  }

  @Get('/api/articles/:id')
  getArticlesById(@Param('id') id: string): any {
    console.log('getArticlesById endpoint hit with id:', id);
    return ARTICLES.find(article => article._id === id);
  }
}
