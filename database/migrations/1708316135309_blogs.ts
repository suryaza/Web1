import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'blogs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("judul");
      table.text("isi");
      table.text("cover");
      table.text("like");
      table.tinyint("dihapus").defaultTo(0);

      table.timestamps(true, true);

    });
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
