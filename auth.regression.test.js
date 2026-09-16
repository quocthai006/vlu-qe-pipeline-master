const { login } = require('./auth');

describe('Regression Tests - Login', () => {
  test('should return true for valid admin credentials', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('should return false for incorrect password', () => {
    expect(login('admin', 'wrongpassword')).toBe(false);
  });

  test('should return false for empty username', () => {
    expect(login('', '123')).toBe(false);
  });

  test('should return false for whitespace username', () => {
    expect(login('   ', '123')).toBe(false);
  });

  test('should return false for special characters in password', () => {
    expect(login('admin', '123@#')).toBe(false);
  });

  test('should return false for locked account', () => {
    expect(login('locked', '123')).toBe(false);
  });

  test('should return false for unknown username', () => {
    expect(login('user123', '123')).toBe(false);
  });

  test('should return false for empty password', () => {
    expect(login('admin', '')).toBe(false);
  });
});
