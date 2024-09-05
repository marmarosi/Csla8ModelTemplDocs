---
title: Arrangement
slug: arrangement
description: Arrangement Description
position: 3
---

The following templates provides variations of the simple list.

### Sorted List

The sorted list template implements a read-only business collection
with sort options in the criteria.

Component | Description
--------- | -----------
SortedTeamList | read-only root collection
SortedTeamListItem | read-only child object

Endpoint:

- [ ] GET /api/pagination/sorted --- *Gets the specified teams sorted.*

### Paginated List

The paginated list template implements a read-only business collection
with pagination options in the criteria. The Data property of the root
object contains a page of the list, while the TotalCount property returns
the count of all items that match the criteria.

Component | Description
--------- | -----------
PaginatedTeamList | read-only root object
PaginatedTeamListItems | read-only child collection
PaginatedTeamListItem | read-only child object

Endpoint:

- [ ] GET /api/pagination/paginated --- *Gets the specified page of teams.*

### Arranged List

The arranged list template implements a read-only business collection with
pagination and sort options in the criteria. The Data property of the root
object contains a page of the list, while the TotalCount property returns
the count of all items that match the criteria.

Component | Description
--------- | -----------
ArrangedTeamList | read-only root object
ArrangedTeamListItems | read-only child collection
ArrangedTeamListItem | read-only child object

Endpoint:

- [ ] GET /api/pagination/arranged --- *Gets the specified page of sorted teams.*
