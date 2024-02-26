import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'siswabarus'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("nama");
      table.text("nik");
      table.text("tgllahir");
      table.text("alamat");
      table.tinyint("dihapus").defaultTo(0);

      table.timestamps(true, true);

    });
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
