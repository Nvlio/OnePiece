"use server"

import { NextApiRequest, NextApiResponse } from "next"
import db from "@/lib/db"
import { table } from "console"

//tipo da tabela dentro do banco de dados
type modelMap = {
    factions: typeof db.factions,
    characters: typeof db.characters
}


//mapa para as tabelas dentro do banco de dados
const modelMap = {
    factions: db.factions,
    characters: db.characters,
}


//funcionalidade api que adiciona 1 item a uma tabela especifica
const Add = async (obj: any, table: string) => {
    const model = modelMap[table as keyof modelMap]
    if (!model) {
        throw new Error("Erro ao adicionar dado a tabela: Tabela não encontrada ou corrompida")
    }
    return await (model as typeof db.factions).create({
        data: obj
    })

}

//funcionalidade que adiciona varios itens a uma tabela especifica
const AddMany = async (obj: any, table: string) => {
    try {
        console.log("fuiserver")
        const model = modelMap[table as keyof modelMap]
        return await (model as typeof db.factions).createMany({ data: obj })
    } catch (e) {
        console.log(e)
        throw new Error(`Error:${e}`)
    }
}

//funcionalidade que pega varios itens dentro da tabela especifica
const GetMany = async (table: string, variable: string | undefined = "", FK = false) => {
    const model = modelMap[table as keyof modelMap]
    let itens;
    if (!model) {
        throw new Error("Erro ao pegar dados: tabela não encontrada ou corrompida")
    }
    if (variable) {
        if (table === 'characters' && FK) {
            console.log("FUI")
            itens = await (model as typeof db.characters).findMany({
                where: { factionId: variable }
            })
        } else {
            const idvalue = variable.toString()
            itens = await (model as typeof db.characters).findMany({
                where: { id: idvalue }
            })
        }
    } else {
        itens = await (model as typeof db.characters).findMany()
    }
    return itens
}

const Update = async (table:string,variable:string,data:any)=>{
    console.log("atualizei")
    const database =  modelMap[table as keyof modelMap] as typeof db.characters
    await database.update({where:{id:variable},data})
}

const Delete = async(table:string,variable:string|undefined)=>{
    console.log("deletei")
    const database = modelMap[table as keyof modelMap] as typeof db.characters
    await database.deleteMany()
}

export { Add, AddMany, GetMany,Update,Delete }