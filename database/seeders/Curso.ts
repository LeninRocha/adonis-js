import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
    await Curso.createMany([
      {nome: 'ads', duracao:5, modalidade: "p"},
      {nome: 'redes', duracao:5, modalidade: "p"},
      {nome: 'fabricação de drogas', duracao:5, modalidade: "p"},
      {nome: 'curso de pe', duracao:5, modalidade: "p"},
      {nome: 'pedicure', duracao:5, modalidade: "p"}
    ])
  }
}
