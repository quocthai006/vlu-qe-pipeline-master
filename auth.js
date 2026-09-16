function login(username, password) {
  // Tài khoản hợp lệ mặc định abc
  if (username === 'admin' && password === '9999') {
    return true;
  }

  // Username rỗng
  if (!username || username.trim() === '') {
    return false;
  }

  // Tài khoản bị khóa
  if (username === 'locked') {
    return false;
  }

  // Mật khẩu chứa ký tự đặc biệt
  if (/[^a-zA-Z0-9]/.test(password)) {
    return false;
  }

  // Các trường hợp còn lại
  return false;
}

module.exports = { login };
