"use client"
import React, { useState } from "react";
import { Add, AddMany, Delete, GetMany, Update } from "@/app/_ApisPrisma/Prisma";

export default function CharController() {
    type strawhat = {
        id: string,
        nome: string,
        factionId: string,
        imagem: string,
        descricao: string
    }

    const [mainCharindex, setMainCharindex] = useState(0)
    const [strawHats, setStrawHats] = useState<strawhat[] | undefined>()
    const [dbStrawHats, setDBStrawHats] = useState([
        { img: "https://mh1.com.br/wp-content/uploads/2024/07/Luffy.webp", nome: "Luffy" },
        { img: "https://qph.cf2.quoracdn.net/main-qimg-044f9739fdf4ffa6293afa2c577a5a15-lq", nome: "Zoro" },
        { img: "https://i.pinimg.com/736x/ea/ff/df/eaffdfa6838d35d493f35fdc0199772a.jpg", nome: "Sanji" },
        { img: "https://i.pinimg.com/736x/00/54/de/0054decc178df94905c2255d65e20e17.jpg", nome: "Jinbe" },
        { img: "https://imgix.ranker.com/list_img_v2/8343/2728343/original/best-franky-quotes-one-piece?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720", nome: "Franky" },
        { img: "https://wegotthiscovered.com/wp-content/uploads/2024/09/Nico-Robin-One-Piece.jpg?w=1200", nome: "Robin" },
        { img: "https://i1.sndcdn.com/artworks-000090772881-aoavrt-t1080x1080.jpg", nome: "Brook" },
        { img: "https://i.pinimg.com/736x/c0/2b/62/c02b629721224f3b386b62aadb126807.jpg", nome: "Chopper" },
        { img: "https://i.pinimg.com/736x/7b/28/d5/7b28d524c69f99d5564574dbdd2a0e67.jpg", nome: "Nami" },
        { img: "https://i.pinimg.com/736x/cc/7e/0f/cc7e0f169703e522a179d6d3e17a2ca4.jpg", nome: "Usopp" }
    ])

    const MainChars = async () => {
        console.log("FUI2")
        const strawHatsDB = await GetMany("characters", "cm7s0sr7s0000vlvsr3bd13jo", true)
        console.log(strawHatsDB)
        setStrawHats(strawHatsDB)
    }

    

    return {
        mainCharindex,
        strawHats,
        dbStrawHats,
        setMainCharindex,
        MainChars,
    }
}