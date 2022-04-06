## Set env

```
npm init

npm i express express-graphql graphql

npm i --save-dev nodemon
```

<!-- o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o -->

## run

```bash
npm run devStart
```

<!-- o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o -->

## Config bug 

expressGraphQL is not a function
- https://stackoverflow.com/questions/65517979/expressgraphql-is-not-a-function

<!-- o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o -->

## GraphiQL

### mutation
```
mutation {
  addBook(name: "new name", authorId: 1) {
    id
    name
  }
}
```

### query

###