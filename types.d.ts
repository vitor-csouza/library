type User ={
    "id": number,
    "name": String,
    "username": String,
    "email": String,
    "address": {
      "street": String,
      "suite": String
      "city": String,
      "zipcode": String,
      "geo": {
        "lat": String,
        "lng": String
      }
    },
    "phone": String,
    "website": String,
    "company": {
      "name": String,
      "catchPhrase": String,
      "bs": String
    }
  }

  type UserC = {
    'id': number,
    'name': String,
    'email': String,
    'books': Book[]
  }

  type Category = {
    'id': number,
    'name': String,
  }

  type Book = {
    'id': number,
    'title': String,
    'author': String,
    'publication_year': Date
    'coverUrl': String,
    'categoryId': Number
  }