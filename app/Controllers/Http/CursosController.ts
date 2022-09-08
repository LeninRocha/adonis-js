// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";

export default class CursosController {
  index(){
    return Curso.all()
  }
  store({request}){

    var req = request.body()
    const dados = {
      nome: req.nome,
      duracao: req.duracao,
      modalidade: req.modalidade
    }

    return Curso.create(dados)
  }
}
