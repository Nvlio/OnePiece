import React from "react";
import MenuLateral from "../Componentes/Menus/LateralMenu";
import MainListShow from "./componentes/MainList";
import AllChars from "./componentes/AllPersonagens";
import IframeMusicBlock from "./componentes/Musica/MusicBlock";

export default function MainPage() {
    return (
        <div>
            <MenuLateral tam={"100vh"} />
            <div className=" NoImgBackground" >
                <MainListShow/>
                <AllChars/>
            </div>
        </div>
    )
}