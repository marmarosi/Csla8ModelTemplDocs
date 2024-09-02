
export interface TreeNode {

  id: string;
  slug: string;
  title: string;
  branch: string;
  position: number;
  level: number;
  children: TreeNode[];
}
