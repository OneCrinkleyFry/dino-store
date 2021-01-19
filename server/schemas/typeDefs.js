const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Listing {
        _id: ID
        name: String
        description: String
        image: String
        quantity: Int
        price: Float
    }

    type Order {
        _id: ID
        purchaseDate: String
        listings: [Listing]
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        listings: [Listing]
        orders: [Order]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        listings(name: String): [Listing]
        order(_id: ID!): Order
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;