---
title: Tree Model
slug: tree
description: Tree Model Description
position: 7
---

# Tree Model

![Tree model](/images/tree.png "Tree model")

### Tree

The tree templates implements a special version of the complex list where
all child objects are the same as the root object.

Component | Description
--------- | -----------
FolderTree | read-only root object
FolderNodes | read-only child collection
FolderNode | read-only child object

Endpoint:

- [ ] GET /api/tree/:id --- *Gets the specified folder tree.*
