---
title: Complex Models
slug: complex
description: Complex Models Description
position: 5 
---

![Complex model](/images/complex.png "Complex model")

The complex models implement the use cases of a multi-level entity.
Root entity: Team, child entity: Player.

### Complex List

The complex list template implements a read-only business collection where
all collection elements have a read-only child collection.

Component | Description
--------- | -----------
TeamList | read-only root collection
TeamListItem | read-only child object
TeamListPlayers | read-only child collection
TeamListPlayer | read-only child object

Endpoint:

- [ ] GET /api/complex --- *Gets a list of teams.*

### Complex View

The complex view template implements a read-only business object with
a read-only child collection.

Component | Description
--------- | -----------
TeamView | read-only root object
TeamViewPlayers | read-only child collection
TeamViewPlayer | read-only child object

Endpoint:

- [ ] GET /api/complex/:id/view --- *Gets the specified team details to display.*

### Complex Edit

The complex edit template implements an editable business object with
an editable child collection.

Component | Description
--------- | -----------
Team | editable root object
TeamPlayers | editable child collection
TeamPlayer | editable child object

Endpoints:

- [ ] GET /api/complex/new --- *Gets e new team to edit.*
- [ ] POST /api/complex --- *Creates a new team.*
- [ ] GET /api/complex/:id --- *Gets the specified team to edit.*
- [ ] PUT /api/complex --- *Updates the specified team.*
- [ ] DELETE /api/complex --- *Deletes the specified team.*

### Complex Set

The complex set template implements an editable business collection
where all collection elements have an editable child collection.

Component | Description
--------- | -----------
TeamSet | editable root collection
TeamSetItem | editable child object
TeamSetPlayers | editable child collection
TeamSetPlayer | editable child object

Endpoints:

- [ ] GET /api/complex/set --- *Gets the specified team set to edit.*
- [ ] PUT /api/complex/set --- *Updates the specified team set.*

### Complex Command

The complex command template implements a command object with a resulting
read-only child collection.

Component | Description
--------- | -----------
CountTeams | command object
CountTeamsResults | read-only child collection
CountTeamsResult | read-only child object

Endpoint:

- [ ] PATCH /api/complex --- *Counts the teams grouped by the number of their items.*
