import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Tasks extends BaseSchema {
  protected tableName = "tasks";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .string("url", 1000)
        .notNullable()
        .defaultTo("https://github.com/Vad1mo/hello-world-rest");
      table.string("ip", 12).defaultTo(null);
      table.string("status", 20).notNullable().defaultTo("INITIALIZATION");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
