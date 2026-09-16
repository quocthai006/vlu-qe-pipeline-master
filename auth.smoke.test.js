const { login } = require('./auth');

test('Smoke Test - Login successfully with admin/123', () => {
  expect(login('admin', '123')).toBe(true);
});
