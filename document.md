## 🎃 Details
### ⬇ Customer Schema
| id     | name   | email  | age   |  
| :---:  | :---:  | :---:  | :---: |
| String | String | String | Int   | 

```json
{
  "customers": [
    {
      "id": "1",                 
      "name": "John",            
      "email": "1@gmail.com",    
      "age": 36                  
    },
    //...
  ]
}
```

### ⬇ Set env
```bash
npm init

npm install express express-graphql nodemon --save

npm install graphql --save

npm install json-server axios --save
```
### ⬇ Run 

```bash
npm run dev:server
```

## 🎃 GraphiQL
```
# 🎃 Query 🎃

# {
#   customer(id:"4") {
#     name,
#     email,
#     age
#   }
# }

# {
#   customers {
#     name,
#     age
#   }
# }

# 🎃 Mutations 🎃

# mutation{
#   addCustomer(
#     name:"Harry White",
#     email: "harry@gmail.com",
#     age: 34
#   ) {
#     id,
#     name,
#     email
#   }
# }

# mutation{
#   deleteCustomer(
#     id:"4",
#   ) {
#     id
#   }
# }

mutation{
  editCustomer(
    id:"2",
    age: 99
  ) {
    id,
    name
  }
}
```
