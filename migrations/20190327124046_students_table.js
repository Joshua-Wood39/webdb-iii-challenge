
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', function(tbl) {
        // primary key, called id and make it auto-increment
        tbl.increments();
    
        tbl
        .string('name', 128)
        .notNullable()
        .unique();
    
        // foreign key
        tbl
        .integer('cohort_id') // the column name in this table (users)
        .unsigned()
        .notNullable()
        .references('id') // primary key in the related (parent) table (roles)
        .inTable('cohorts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    
        // tbl.unique('name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};
