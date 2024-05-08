const { gql } = require('apollo-server-express');

const typeDefs = gql`
  """
  Represents a Todo item.
  """
  type Todo {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
  }

  """
  Represents input data for creating or updating a Todo.
  """
  input TodoInput {
    title: String!
    description: String
    completed: Boolean
  }

  type Query {
    """
    Retrieves all Todo items.
    """
    todos: [Todo!]!

    """
    Retrieves a Todo item by its ID.
    """
    todo(id: ID!): Todo
  }

  type Mutation {
    """
    Creates a new Todo item.
    """
    createTodo(input: TodoInput!): Todo

    """
    Updates an existing Todo item.
    """
    updateTodo(id: ID!, input: TodoInput!): Todo

    """
    Deletes a Todo item by its ID.
    """
    deleteTodo(id: ID!): Todo
  }
`;

module.exports = typeDefs;
