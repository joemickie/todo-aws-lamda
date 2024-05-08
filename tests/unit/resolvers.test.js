const { createTodo } = require('./resolvers');
const { Todo } = require('../models/Todo');

jest.mock('../models/Todo');

describe('createTodo resolver', () => {
  it('should create a new todo item', async () => {
    const input = { title: 'Test Todo', description: 'Test description', completed: false };
    const todo = { ...input };
    Todo.mockReturnValueOnce(todo);

    const result = await createTodo(null, { input });
    expect(result).toEqual(todo);
  });
});
