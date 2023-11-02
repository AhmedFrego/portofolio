import { v4 } from "uuid";

export class SiteClass {
  id: string;

  constructor(public title: string, public previewImg: string,public URL?:string) {
    this.id = v4();
  }
}
