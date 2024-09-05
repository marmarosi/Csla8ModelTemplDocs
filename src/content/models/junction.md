---
title: Junction Models
slug: junction
description: Junction Models Description
position: 6
---

![Junction model](/images/junction.png "Junction model")

The junction models implement the use cases of two entities having a
junction or bridging entity. Root entities: Group and Person, junction
entity: GroupPersons.

### Junction View

The junction view template implements a read-only business object with
a read-only member collection.

Component | Description
--------- | -----------
GroupView | read-only root object
GroupViewPersons | read-only child collection
GroupViewPerson | read-only child object

Endpoint:

- [ ] GET /api/junction/:id/view --- *Gets the specified group details to display.*

### Junction Edit

The junction template implements an editable business object with
an editable member collection.

Component | Description
--------- | -----------
Group | editable root object
GroupPersons | editable child collection
GroupPerson | editable child object

Endpoints:

- [ ] GET /api/junction/new --- *Gets a new group to edit.*
- [ ] POST /api/junction --- *Creates a new group.*
- [ ] GET /api/junction/:id --- *Gets the specified group to edit.*
- [ ] PUT /api/junction --- *Updates the specified group.*
- [ ] DELETE /api/junction --- *Deletes the specified group.*
