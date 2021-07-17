// knex seed:make seedName
// knex seed:run

exports.seed = function (knex) {
  return knex('usuarios').insert([
    { nome: 'Usuario Teste', cpf: 12345678900, telefone_celular: '32312821' }
  ]);
};
