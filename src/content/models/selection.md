---
title: Selection
slug: selection
description: Selection Description
position: 4
---

# Selection

The selection templates provides simplified versions of the simple list that
can be used e.g. in drop-down lists. The items of the selection list have
properties for a value and a description only.

### Choice by Key

The template implements the selection list with a value property named Key
whose data type is number.

Component | Description
--------- | -----------
TeamKeyChoice | read-only root collection
KeyNameOption | read-only child object

Endpoint:

- [ ] GET /api/selection/with-key --- *Gets the key-name choice of the teams.*

### Choice by ID

The template implements the selection list with a value property name Id
whose data type is string. The Id property contains the encrypted Key value.

Component | Description
--------- | -----------
TeamIdChoice | read-only root collection
IdNameOption | read-only child object

Endpoint:

- [ ] GET /api/selection/with-id --- *Gets the id-name choice of the teams.*

### Choice by GUID

The template implements the selection list with a value property name Guid
whose data type is Guid.

Component | Description
--------- | -----------
TeamGuidChoice | read-only root collection
GuidNameOption | read-only child object

Endpoint:

- [ ] GET /api/selection/with-guid --- *Gets the guid-name choice of the teams.*

### Choice by Code

The template implements the selection list with a value property name Code
whose data type is string.

Component | Description
--------- | -----------
TeamCodeChoice | read-only root collection
CodeNameOption | read-only child object

Endpoint:

- [ ] GET /api/selection/with-code --- *Gets the code-name choice of the teams.*
