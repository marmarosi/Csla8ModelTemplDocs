import { ContentFile } from '@analogjs/content';

export interface ContentNode<Attributes
  extends Record<string, any>>
  extends ContentFile<Attributes> {

  level: number;
  children: ContentNode<Attributes>[];
}
