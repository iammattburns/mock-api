<a name="top"></a>
# Mock API Documentation v1.0.0

Node.js Express Rest API for Mock API

# Table of contents

- [Figure](#Figure)
  - [Create](#Create)
  - [Delete](#Delete)
  - [Get](#Get)
  - [Get All](#Get-All)
  - [Update](#Update)

___


# <a name='Figure'></a> Figure

## <a name='Create'></a> Create
[Back to top](#top)

```
POST /figures/
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| name | `String` | <p>Name of the Figure</p> |
| series | `Number` | <p>Series of the Figure</p> |
| move | `String` | <p>Move of the Figure</p> |
| year | `Number` | <p>Year of the Figure</p> |
| cardColor | `String` | <p>Card Color of the Figure</p> |
| accessories | `String` | <p>Accessories of the Figure</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>ID of the Figure</p> |
| name | `String` | <p>Name of the Figure</p> |
| series | `Number` | <p>Series of the Figure</p> |
| move | `String` | <p>Move of the Figure</p> |
| year | `Number` | <p>Year of the Figure</p> |
| cardColor | `String` | <p>Card Color of the Figure</p> |
| accessories | `String` | <p>Accessories of the Figure</p> |

## <a name='Delete'></a> Delete
[Back to top](#top)

```
DELETE /figures/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Figures unique ID</p> |

## <a name='Get'></a> Get
[Back to top](#top)

```
GET /figures/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Figures unique ID</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>ID of the Figure</p> |
| name | `String` | <p>Name of the Figure</p> |
| series | `Number` | <p>Series of the Figure</p> |
| move | `String` | <p>Move of the Figure</p> |
| year | `Number` | <p>Year of the Figure</p> |
| cardColor | `String` | <p>Card Color of the Figure</p> |
| accessories | `String` | <p>Accessories of the Figure</p> |

## <a name='Get-All'></a> Get All
[Back to top](#top)

```
GET /figures/
```
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>ID of the Figure</p> |
| name | `String` | <p>Name of the Figure</p> |
| series | `Number` | <p>Series of the Figure</p> |
| move | `String` | <p>Move of the Figure</p> |
| year | `Number` | <p>Year of the Figure</p> |
| cardColor | `String` | <p>Card Color of the Figure</p> |
| accessories | `String` | <p>Accessories of the Figure</p> |

## <a name='Update'></a> Update
[Back to top](#top)

```
POST /figures/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Figures unique ID</p> |

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| name | `String` | <p>Name of the Figure</p> |
| series | `Number` | <p>Series of the Figure</p> |
| move | `String` | <p>Move of the Figure</p> |
| year | `Number` | <p>Year of the Figure</p> |
| cardColor | `String` | <p>Card Color of the Figure</p> |
| accessories | `String` | <p>Accessories of the Figure</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>ID of the Figure</p> |
| name | `String` | <p>Name of the Figure</p> |
| series | `Number` | <p>Series of the Figure</p> |
| move | `String` | <p>Move of the Figure</p> |
| year | `Number` | <p>Year of the Figure</p> |
| cardColor | `String` | <p>Card Color of the Figure</p> |
| accessories | `String` | <p>Accessories of the Figure</p> |

