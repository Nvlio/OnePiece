"use server"

import React from "react";
import CharController from "../controller/controller";
import { GetMany } from "@/app/_ApisPrisma/Prisma";
import Image from "next/image";

export default async function AllChars() {
    const allchars = await GetMany("characters")
    console.log(allchars)

    return (
        <div id="MainShow">
            <h1>Personagens</h1>
            <hr />
                <div className="BlackBackground Container WrapFlex" >
                    {allchars.map((char, index) => {
                        return (
                            <div className="ItemBlock" key={`${char.nome}${index}`}>
                                <Image className="ImagemBlock" src={char.imagem} height={1000} width={1000} alt={`Imagem do ${char.nome}`} style={{ height: "50vh" }} />
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}