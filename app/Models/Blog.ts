import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Blog extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public judul: string;

  @column()
  public isi: string;

  @column()
  public cover: string;

  @column()
  public like: number;

  @column()
  public dihapus: number;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
