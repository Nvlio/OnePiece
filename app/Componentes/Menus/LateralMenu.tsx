"use client";

import React, { useEffect, useState } from "react";
import "../../Styles/Pagestyle.css"
import Image from "next/image";
import Link from "next/link";

export default function MenuLateral({tam}:{tam?:string}) {

    const [isHovered, setHovered] = useState(false)
    const [screenwidth,setScreenwidth] = useState(0)

    useEffect(() => {
        if(typeof window!==undefined){
            setScreenwidth(window.innerWidth)
        }
    }, [])

    return (
        <div className="LeftMenu" onMouseOver={() => { setHovered(true) }} onMouseOut={() => { setHovered(false) }} style={{ height: tam?tam:"90vh"} }>
            {!isHovered ?
                <Image src="https://logos-world.net/wp-content/uploads/2023/03/Straw-Hat-Emblem.png" alt="Straw Hat Jolly Roger" width={100} height={100} />
                :
                <ul>
                    <li><Link href={"/Sobre"}>Sobre</Link></li>
                    <li><Link href={"/Historia"}>Historia</Link></li>
                    <li><Link href={"/Personagens"}>Personagens</Link></li>
                    <li><Link href={"/Faccoes"}>Facções</Link></li>
                    <li><Link href={"/Ilhas"}>Ilhas</Link></li>
                    <li><Link href={"/Teorias"}>Teorias</Link></li>
                </ul>
            }
            
        </div>
    )
}