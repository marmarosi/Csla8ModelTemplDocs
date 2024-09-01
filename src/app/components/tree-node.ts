
export interface TreeNode {

  id: string;
  slug: string;
  title: string;
  folder: string;
  position: number;
  level: number;
  children: TreeNode[];
}
