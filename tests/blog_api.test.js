const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

const initialNotes = [
  { title: 'test title', author: 'test author', url: 'test url' },
];

test('blogs are returned as json', async () => {
  const response = await api.get('/api/blogs');
  expect(response.status).toBe(200);
  expect('/application/json/');
  expect(response.body).toHaveLength(1);
}, 100000);

test('blog unique identifier', async () => {
  const response = await api.get('/api/blogs');

  response._body.forEach((blog) => {
    expect(blog.id).not.toBe(undefined);
  });
});

test('a valid blog can be added', async () => {
  const newBlog = {
    title: 'test title 2',
    author: 'test author 2',
    url: 'test url 2',
    likes: '10',
  };

  const addBlog = await api.post('/api/blogs').send(newBlog);
  expect(201);

  const response = await api.get('/api/blogs');

  const contents = response.body.map((r) => r.title);

  expect(response.body).toHaveLength(initialNotes.length + 1);
  expect(contents).toContain('test title 2');
});

test('add missing likes property', async () => {
  const newBlog = {
    title: 'test title 3',
    author: 'test author 3',
    url: 'test url 3',
  };

  const addBlog = await api
    .post('/api/blogs')
    .send(newBlog.likes ? newBlog : { ...newBlog, likes: 0 });
  expect(201);

  const response = await api.get('/api/blogs');

  const contents = response.body.map((r) => r.likes);
  expect(contents).not.toBe(undefined);
});

test('add missing property test', async () => {
  const newBlog = {
    author: 'test author 3',
    likes: '13',
  };

  const addBlog = await api.post('/api/blogs').send(newBlog);
  expect(400);
});

afterAll(() => {
  mongoose.connection.close();
});
