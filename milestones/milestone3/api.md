## REST API Documentation

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