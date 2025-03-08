"use client"

import React, { useEffect } from "react"
import CharController from "../controller/controller"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

export default function MainListShow() {
    const { mainCharindex, strawHats, setMainCharindex, MainChars,add } = CharController()

    useEffect(() => { MainChars() }, [])


    if (strawHats) {
        return (
            <div id="MainShow">
                <h1 >Chapéus de Palha</h1>
                <hr />
                <div className="BlackBackground">
                    <ul>
                        {strawHats.map((strawHat: any, index: number) => {
                            return (
                                <li key={index} style={{ color: mainCharindex === index ? "black" : "white", display: mainCharindex === index ? 'block' : 'none' }}>
                                    <div className="MainListImg">
                                        <Image className="image" src={strawHat.imagem} alt={`foto ${strawHat.nome}`} width={1000} height={1000} />
                                        <h2>{strawHat.nome}</h2>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <div id="MainShowButtons">
                        <button className="BigButton" onClick={() => { setMainCharindex(mainCharindex === 0 ? 9 : mainCharindex - 1) }}><FontAwesomeIcon icon={faArrowLeft} size="lg" /></button>
                        <button className="BigButton" onClick={() => { setMainCharindex(mainCharindex === 9 ? 0 : mainCharindex + 1) }}><FontAwesomeIcon icon={faArrowRight} size="lg" /></button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <h1>Carregando</h1>
        )
    }
}