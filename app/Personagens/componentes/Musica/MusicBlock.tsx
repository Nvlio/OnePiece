"use client"

import { useEffect, useRef, useState } from "react"
import MusicaControle from "./controllerMusica"

export default function IframeMusicBlock() {

    const {MusicaAtual,Proximo} = MusicaControle()

    useEffect(()=>{console.log(MusicaAtual)},[])

    return (
        <div>
            <button className="ButtonMusicBlock" onClick={Proximo}>Mudar</button>
            <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                className="MusicBlock"
                src={MusicaAtual.musica}
            >
            </iframe>
        </div>
    )
}