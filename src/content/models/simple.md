---
title: Simple Models
slug: simple
description: Simple Models Description
position: 2
---

![Simple model](/images/simple.png "Simple model")

The simple models implement the use cases of a one-level entity.
Root entity: Team.

### Simple List

The simple list template implements a read-only business collection.

Component | Description
--------- | -----------
SimpleTeamList | read-only root collection
SimpleTeamListItem | read-only child object

Endpoint:

- [ ] GET /api/simple --- *Gets a list of teams.*

### Simple View

The simple view template implements a read-only business object.

Component | Description
--------- | -----------
SimpleTeamView | read-only root object

Endpoint:

- [ ] GET /api/simple/:id/view --- *Gets the specified team details to display.*

### Simple Edit

The simple edit template implements an editable business object.

Component | Description
--------- | -----------
SimpleTeam | read-only editable object

Endpoints:

- [ ] GET /api/simple/new --- *Gets e new team to edit.*<br/>
- [ ] POST /api/simple --- *Creates a new team.*<br/>
- [ ] GET /api/simple/:id --- *Gets the specified team to edit.*<br/>
- [ ] PUT /api/simple --- *Updates the specified team.*<br/>
- [ ] DELETE /api/simple --- *Deletes the specified team.*

### Simple Set

The simple set template implements an editable business collection.

Component | Description
--------- | -----------
SimpleTeamSet | editable root collection
SimpleTeamSetItem | editable child object

Endpoints:

- [ ] GET /api/simple/set --- *Gets the specified team set to edit.*<br/>
- [ ] PUT /api/simple/set --- *Updates the specified team set.*

### Simple Command

The simple command template implements a command object.

Component | Description
--------- | -----------
RenameTeam | command object

Endpoint:

- [ ] PATCH /api/simple --- *Renames the specified team.*
