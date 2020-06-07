import Knex from 'knex'


export async function up(knex:Knex){
    //criar a tabela
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.string('point_id')//todo point_id precisa ser um id valido dento da tabela points.
        .notNullable()
        .references('id')
        .inTable('points')
        table.string('item_id')
        .notNullable().references('id').inTable('items')//inline
        
    })
}


export async function down(knex:Knex){
    //voltar a atras (deletar a tabela)
    return knex.schema.dropTable('point_items');
}

