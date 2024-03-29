// knex migrate:make nomeMigration
// knex migrate:up or latest (ultima criada)
// knex migrate:rollback

exports.up = function (knex) {
    return knex.schema.createTable('usuarios', function (table) {
        table.increments();
        table.string('nome', 500).notNullable();
        table.string('cpf', 11).notNullable().unique();
        table.string('telefone_celular').notNullable();
        table.timestamps();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuarios');
};
