
exports.up = function(knex) {
    return knex.schema.createTable('cohorts', function(tbl) {
        // primary key, called id and make it auto-increment
        tbl.increments();
    
        tbl
        .string('name', 128)
        .notNullable()
        .unique();
    
        // tbl.unique('name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts');
};
