# Milestone 3: Rest API using Express Framework
👤 Owen Mount

📚 CST-391: JavaScript Web Application Development

🏷️ ONotes

📺 [Screencast](https://mygcuedu6961-my.sharepoint.com/:v:/g/personal/omount_my_gcu_edu/Ea7nt3BsxsNDnvaEY6AsbCUByOUOt2nvJIA6L6t29GKWuQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=7axQeK)

## Introduction
ONotes is a lightweight plain-text notes app that supports some simple organization features. ONotes uses an express backend API paired with React and Angular frontends to access a MySQL database.

## Design Updates

### Changes
- Notes now have a UUID instead of an integer ID. UUIDs are stored as a binary(16) type in the database, and converted to
  strings when they are queried. The MySql server manages UUID creation.
- The Note model no longer has an append() method. Instead, content can be appended directly.

### Issues
- Because note IDs are stored as binary(16), the OkPacket always returns insertId: 0 when creating and updating notes.
  I would like to add functionality to get the last inserted UUID in the future.

## Functionality Requirements
- [x] As a user, I want to create a new note so that I can jot down information.
- [x] As a user, I want to edit an existing note so that I can update my information.
- [x] As a user, I want to delete a note so that I can remove information I no longer need.
- [ ] As a user, I want to organize my notes into folders or categories so that I can find them easily.
- [ ] As a user, I want to add tags to my notes so that I can filter and search them efficiently.
- [ ] As a user, I want a dark mode option so that I can reduce eye strain in low-light environments.

## Design
![](resources/er.png)

*Database ER diagram*

---

![](resources/uml.png)

*UML Class Diagram*

---

![](resources/sitemap.png)

*UI Sitemap*

---

![](resources/wireframe1.png)

*Wireframe: All notes display*

---

![](resources/wireframe2.png)

*Wireframe: Note detail display*

## Risks
- Data loss
- Data security
- Scalability

## [REST API Documentation](api.yaml)

> Version 1.0.0

Lightweight plain-text notes app

### Path Table

| Method | Path                                      | Description     |
|--------|-------------------------------------------|-----------------|
| GET    | [/notes](#getnotes)                       | Read all notes  |
| POST   | [/notes](#postnotes)                      | Create new note |
| PUT    | [/notes](#putnotes)                       | Update note     |
| GET    | [/notes/{noteUuid}](#getnotesnoteuuid)    | Read a note     |
| DELETE | [/notes/{noteUuid}](#deletenotesnoteuuid) | Delere a note   |

### Reference Table

| Name           | Path                                                                    | Description                  |
|----------------|-------------------------------------------------------------------------|------------------------------|
| NoteUuid       | [#/components/schemas/NoteUuid](#componentsschemasnoteuuid)             | UUID of note                 |
| DateTime       | [#/components/schemas/DateTime](#componentsschemasdatetime)             | Date and time for timestamps |
| Note           | [#/components/schemas/Note](#componentsschemasnote)                     |                              |
| OkPacket       | [#/components/schemas/OkPacket](#componentsschemasokpacket)             |                              |
| ResponsePacket | [#/components/schemas/ResponsePacket](#componentsschemasresponsepacket) |                              |
| Error          | [#/components/schemas/Error](#componentsschemaserror)                   |                              |
| ApiKey         | [#/components/securitySchemes/ApiKey](#componentssecurityschemesapikey) |                              |

### Path Details

***

### [GET]/notes

- Summary
  Read all notes

#### Responses

- 200 Array of all notes

`application/json`

```ts
{
  // UUID of note
  id: string
  title: string
  content: string
  // Date and time for timestamps
  created?: string
  updated:#/components/schemas/DateTime
}[]
```

- 500 Internal server error

`application/json`

```ts
{
  // A human readable error message
  message: string
}
```

***

### [POST]/notes

- Summary
  Create new note

#### RequestBody

- application/json

```ts
{
  // UUID of note
  id: string
  title: string
  content: string
  // Date and time for timestamps
  created?: string
  updated:#/components/schemas/DateTime
}
```

#### Responses

- 200 Response showing successful creation

`application/json`

```ts
{
  fieldCount?: number
  affectedRows?: number
  insertId?: number
  serverStatus?: number
  warningCount?: number
  message?: string
  protocol41?: boolean
  changedRows?: number
}
```

- 500 Internal server error

`application/json`

```ts
{
  // A human readable error message
  message: string
}
```

***

### [PUT]/notes

- Summary
  Update note

#### RequestBody

- application/json

```ts
{
  // UUID of note
  id: string
  title: string
  content: string
  // Date and time for timestamps
  created?: string
  updated:#/components/schemas/DateTime
}
```

#### Responses

- 200 Response showing successful update

`application/json`

```ts
{
  // UUID of note
  id: string
  title: string
  content: string
  // Date and time for timestamps
  created?: string
  updated:#/components/schemas/DateTime
}[]
```

- 500 Internal server error

`application/json`

```ts
{
  // A human readable error message
  message: string
}
```

***

### [GET]/notes/{noteUuid}

- Summary
  Read a note

#### Responses

- 200 Note object

`application/json`

```ts
{
  // UUID of note
  id: string
  title: string
  content: string
  // Date and time for timestamps
  created?: string
  updated:#/components/schemas/DateTime
}
```

- 500 Internal server error

`application/json`

```ts
{
  // A human readable error message
  message: string
}
```

***

### [DELETE]/notes/{noteUuid}

- Summary
  Delete a note

#### Responses

- 200 Response showing successful delete

`application/json`

```ts
{
  // UUID of note
  id: string
  title: string
  content: string
  // Date and time for timestamps
  created?: string
  updated:#/components/schemas/DateTime
}[]
```

- 500 Internal server error

`application/json`

```ts
{
  // A human readable error message
  message: string
}
```

## References

### #/components/schemas/NoteUuid

```ts
{
  "description": "UUID of note",
  "type": "string"
}
```

### #/components/schemas/DateTime

```ts
{
  "description": "Date and time for timestamps",
  "type": "string"
}
```

### #/components/schemas/Note

```ts
{
  // UUID of note
  id: string
  title: string
  content: string
  // Date and time for timestamps
  created?: string
  updated:#/components/schemas/DateTime
}
```

### #/components/schemas/OkPacket

```ts
{
  fieldCount?: number
  affectedRows?: number
  insertId?: number
  serverStatus?: number
  warningCount?: number
  message?: string
  protocol41?: boolean
  changedRows?: number
}
```

### #/components/schemas/ResponsePacket

```ts
{
  okPacket: {
    fieldCount?: number
    affectedRows?: number
    insertId?: number
    serverStatus?: number
    warningCount?: number
    message?: string
    protocol41?: boolean
    changedRows?: number
  }
  // UUID of note
  lastInsertId?: string
}
```

### #/components/schemas/Error

```ts
{
  // A human readable error message
  message: string
}
```

### #/components/securitySchemes/ApiKey

```ts
{
  "type": "apiKey",
          "in": "header",
          "name": "X-Api-Key"
}
```
