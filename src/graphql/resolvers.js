const { Todo } = require('../models/Todo');
const logger = require('../utils/logger');

const resolvers = {
  Query: {
    todos: async (_, __, { user }) => {
      if (!user) {
        throw new Error('User not authenticated');
      }

      try {
        const todos = await Todo.find({ createdBy: user.id });
        return todos;
      } catch (error) {
        logger.error('Error fetching todos:', error);
        throw new Error('Failed to fetch todos');
      }
    },
    todo: async (_, { id }, { user }) => {
      if (!user) {
        throw new Error('User not authenticated');
      }

      try {
        const todo = await Todo.findOne({ _id: id, createdBy: user.id });
        return todo;
      } catch (error) {
        logger.error('Error fetching todo:', error);
        throw new Error('Failed to fetch todo');
      }
    },
  },
  Mutation: {
    createTodo: async (_, { input }, { user }) => {
      try {
        const todo = new Todo({ ...input, createdBy: user.id });
        await todo.save();
        return todo;
      } catch (error) {
        logger.error('Error creating todo:', error);
        throw new Error('Failed to create todo');
      }
    },
    updateTodo: async (_, { id, input }, { user }) => {
      try {
        const todo = await Todo.findOneAndUpdate({ _id: id, createdBy: user.id }, input, { new: true });
        if (!todo) {
          throw new Error('Todo not found');
        }
        return todo;
      } catch (error) {
        logger.error('Error updating todo:', error);
        throw new Error('Failed to update todo');
      }
    },
    deleteTodo: async (_, { id }, { user }) => {
      try {
        const todo = await Todo.findOneAndDelete({ _id: id, createdBy: user.id });
        if (!todo) {
          throw new Error('Todo not found');
        }
        return todo;
      } catch (error) {
        logger.error('Error deleting todo:', error);
        throw new Error('Failed to delete todo');
      }
    },
  },
};

module.exports = resolvers;
