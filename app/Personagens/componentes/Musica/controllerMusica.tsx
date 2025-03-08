import React, { useState } from "react";

export default function MusicaControle() {
    const [MusicaAtual, setMusicaAtual] = useState({musica:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/5075680&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true",index:0})

    const playlist = [
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/5075680&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/224029400&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229304006&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/876509236&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1619755521&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/118654657&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    ]

    const Proximo = () => {
        setMusicaAtual({musica:playlist[MusicaAtual.index++],index:MusicaAtual.index++})
    }

    return {
        playlist,
        MusicaAtual,
        Proximo,
    }
}