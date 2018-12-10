// Imports: GraphQL
import { gql } from 'apollo-server-express';

// GraphQL: TypeDefs
const TYPEDEFS = gql`

scalar ObjectID

type AuthToken {
  token:String
}

type User{
  _id         : ObjectID!
  first_name   : String
  last_name    : String
  email       : String
  password    : String
  gender      : String
  birthDate   : String
  tel         : String
  language    : String
  address     : String
  description : String
  photo       : String
  is_active   : Boolean
}

input UserInput{
  first_name  : String!
  last_name   : String!
  email       : String!
  password    : String!
  birth_date  : String
  gender      : String
  tel         : String
  language    : String
}

type Home{
  _id         : ObjectID!
  description : String
  address     : String
  cords_lat   : String
  ccords_lon  : String
  services    : String
  owner_email : String
}

input HomeInput{
  description : String!
  address     : String!
  cords_lat   : String
  cords_lon   : String
  services    : String
  owner_email : String!
}

input HomeDelete{
  is_active   : Boolean
}



type Query{

  ## Users
  me                              : User
  allUsers                        : [User]

  ## Homes
  oneHome (id: ObjectID)          : Home
  userHomes(owner_email: String)  : [Home]
  myHomes                         : [Home]
  allHomes                        : [Home]
}




type Mutation{
  #User
  signUp( input: UserInput! )              : AuthToken
  login(email:String!, password:String!)  : AuthToken


  #Home
  createHome( input: HomeInput )                : Home
  updateHome( id: ObjectID, input : HomeInput ) : Home
  deleteHome( id: ObjectID )                    : Home
  
}

`;

// Exports
export default TYPEDEFS;