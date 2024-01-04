import { register, login, logout } from '../src/middleware/auth/auth';

describe('Authentication', () => {
  it('should register a new user successfully', () => {
    const req = {
      body: {
        username: 'utilisateur_test',
        password: 'mot_de_passe_test',
      },
    };
    const res = {
      send: jest.fn(),
    };
    register(req, res);
    expect(res.send).toHaveBeenCalledWith('Registration successful!');
  });

  it('should login a user successfully', () => {
    const req = {
      body: {
        username: 'utilisateur_test',
        password: 'mot_de_passe_test',
      },
    };
    const res = {
      send: jest.fn(),
    };
    login(req, res);
    expect(res.send).toHaveBeenCalledWith('Login successful!');
  });

  it('should logout a user successfully', () => {
    const req = {};
    const res = {
      send: jest.fn(),
    };
    logout(req, res);
    expect(res.send).toHaveBeenCalledWith('Logout successful!');
  });
});