import { v4 } from "uuid";
// import { UserClass } from "./UserClass";

export class ArticleClass {
  usedLanguages: string[] | [];
  id: string;

  constructor(public title: string, public article: string, public rate: number[] = [],  id?: string) {
    this.id = id || v4();

    this.usedLanguages = [...new Set((article.match(/`+ ?{\w+}/gi))?.map(i => i.replaceAll(/[^\w]/g,'')))];
  }
}
