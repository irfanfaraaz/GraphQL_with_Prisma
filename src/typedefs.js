const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Package {
    id: ID!
    name: String!
    contact: String
    description: String
    location: String!
    cost: Float!
    duration: String
    image: String!
    activities: [String!]!
    details_file: String
    updated_at: String
    video_link: String
    is_premium_flag: Boolean
    # priceRange: [Package]
  }

  type Query {
    packages: [Package!]!
    package(id: ID!): Package!
  }
  
  input createPackageInput {
    id: ID!
    name: String!
    contact: String
    description: String
    location: String!
    cost: Float!
    duration: String
    image: String!
    activities: [String!]!
    details_file: String
    updated_at: String
    video_link: String
    is_premium_flag: Boolean
  }
  input updatePackageInput {
    id: ID!
    newname: String 
    newcontact: String
    newdescription: String
    newlocation: String
    newcost: Float
    newduration: String
    newimage: String
    newactivities: [String!]
    newdetails_file: String
    newupdated_at: String
    newvideo_link: String
    newis_premium_flag: Boolean

  }

  type Mutation {
    createPackage(input: createPackageInput): Package
    updatePackage(input: updatePackageInput): Package
    deletePackage(id: ID!): Package
  }

`;
module.exports = { typeDefs};
