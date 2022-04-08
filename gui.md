##  graphQL GUI

--------------------------------------------                                 --------------------------------------------

# o-o ⚡️ query mock data 

# query {
#   name
# 	age
#   isSingle
#   number
  
#   location {
#     state
# 		city
#   }
# }

# o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o

# o-o ⚡️ query after addUser

query {
  users {
    id
    name
    age
    # location {
    #   state
    #   city
    # }
  }
} 

--------------------------------------------                                 --------------------------------------------

# o-o 🔥 addUser

# mutation {
#   addUser(name: "Jetttnny", age: 9) {
#     id
#     name
#     age
#   }
# }

# o-o 🔥 updateUser

mutation {
  updateUser(id:"2", name:"qq", age: 25) {
    id
    name
    age
  }
}

# o-o 🔥 deleteUser

# mutation {
#   deleteUser(id: "2"){
#     id
#     name
#     age
#   }
# }

# o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o o-o

# o-o 🧚 subcription 

# subscription {
#   update {
#     id
#     name
#     age
#   }
# }





