# MercadoLibreAPI - Backend
![](https://img.shields.io/badge/-Backend-blue)

## Project Description

Server made with NodeJS and ExpressJS, in order to transform the information provided by the [MELI API](https://api.mercadolibre.com/) to be consumed by the Front application.


## :sunny: Endpoints Description
| Endpoint           | Description                                                                                                      | Examples                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| /api/items?q:query | Consult all the elements filtering by query parameter. They must be sent by query params in the URL with value "q".  | http://127.0.0.1:3000/api/items?q=tv    |
| /api/items/:id     | Query a specific product given its ID and get the product detail. The ID must be sent as a parameter of the URL. | http://127.0.0.1:3000/api/items/ML15521 |

## :teacher: Examples Responses
Example of the responses delivered by the server

- http://127.0.0.1:3000/api/items?q=televisor+LED
```json
{
    "author": {
        "name": "Claudio",
        "lastname": "Campuzano"
    },
    "categories": [
        "televisor",
        "LED"
    ],
    "items": [
        {
            "id": "MLA1421858046",
            "title": "Tv Kanji 32 Led Mt005",
            "price": {
            "currency": "ARS",
            "amount": 48499,
            "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_614292-MLA52414422908_112022-I.jpg",
            "condition": "new",
            "free_shipping": true
        }
    ]
}
```
- http://127.0.0.1:3000/api/items/MLA1421858046
```json
{
    "author": {
        "name": "Claudio",
        "lastname": "Campuzano"
    },
    "category": [
        "Libros, Revistas y Comics",
        "Revistas"
    ],
    "items": [
        {
            "id": "MLA718267095",
            "title": "Jazz Landia Mundial Tv 1957 L. Aguile Juke-box Nat King Cole",
            "price": {
                "currency": "ARS",
                "amount": 1300,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_13632-MLA88549507_9110-I.jpg",
            "condition": "used",
            "free_shipping": false,
            "sold_quantity": 0,
            "description": "Jazz Landia Mundial Tv 1957 L. Aguile Juke-box Nat King Cole\n\nc/23"
        }
    ]
}
```



## :building_construction: Installation

```shell
brew install node@18 yarn
yarn install
```

## :running_man: Execution

```shell
yarn dev
```

## :airplane: Future Works
- Adding unit tests for functionality testing
- Add automatic deployment with CD






