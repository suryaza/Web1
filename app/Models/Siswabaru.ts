import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Siswabaru extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nama: string;

  @column()
  public nik: string;

  @column()
  public tgllahir: Date;

  @column()
  public alamat: string;

  @column()
  public dihapus: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
