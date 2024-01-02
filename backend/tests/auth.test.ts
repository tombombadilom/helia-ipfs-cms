const { register, login, logout } = require('../src/middleware/auth/auth');
const  {jest, expect, describe, it } = require('@jest/global');

describe('Authentification', () => {
  it('devrait enregistrer un nouvel utilisateur avec succès', () => {
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
    expect(res.send).toHaveBeenCalledWith('Enregistrement effectué avec succès!');
  });

  it('devrait connecter un utilisateur avec succès', () => {
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
    expect(res.send).toHaveBeenCalledWith('Connexion réussie!');
  });

  it('devrait déconnecter un utilisateur avec succès', () => {
    const req = {};
    const res = {
      send: jest.fn(),
    };
    logout(req, res);
    expect(res.send).toHaveBeenCalledWith('Déconnexion réussie!');
  });
});

