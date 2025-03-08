
import "./Styles/Pagestyle.css"
import MenuLateral from "./Componentes/Menus/LateralMenu";
import IframeMusicBlock from "./Personagens/componentes/Musica/MusicBlock";

//construção da estrutura principal
export default function Home() {

  const Play = () => {
    const iframe = document.getElementById("SoundCloud-iframe") as HTMLIFrameElement
    console.log("fui chamado")
    if(iframe){
      iframe.contentWindow?.postMessage(
        `{"method":"play"}`
      )
    }
  }

  return (
    <div>
      <header className="HeaderMain">
        <h2>One piece project</h2>
      </header>
      <div className="Container">
        <MenuLateral />
        <div className="BackGround" style={{ backgroundImage: "url(https://wallpapers.com/images/hd/cool-thousand-sunny-one-piece-tablet-yox61yftr9crys3i.jpg)" }}>
          <h1 className="Title TextStylized">One piece</h1>
          <p className="Article TextStylized">
            Embarque em uma jornada inesquecível pelos mares deste vasto universo, repleto de aventuras, amizades e segredos ocultos.
            Sinta a brisa da Grand Line enquanto explora ilhas exóticas, conhece personagens cativantes e descobre os mistérios do
            lendário One Piece.<br /><br />
            Seja você um veterano dos mares ou um novo explorador, esta é a sua bússola para navegar por histórias emocionantes,
            teorias intrigantes e momentos inesquecíveis.
          </p>
          {/* <IframeMusicBlock/> */}
        </div>
      </div>
    </div>
  );
}
