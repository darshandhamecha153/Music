import React, { useState, useRef } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import { Howl } from "howler";
import "../styles.css";

const songs = [
    { title: "Har Kisi Ko Nahi Milta ", src: "/assets/Har_kisi_ko.mp3", cover: "/assets/31.png" },
    { title: "Aaj ki party", src: "/assets/_Aaj_Ki_Party.mp3", cover: "/assets/1.png" },
    { title: "Abhi to party Shuru Hui Hai", src: "/assets/_Abhi_Toh_Party_Shuru_Hui_Hai.mp3", cover: "/assets/2.png" },
    { title: 'Aaj ki raat(From "Stree 2")', src: "/assets/Aaj_Ki_Raat_Stree_2.mp3", cover: "/assets/3.png" },
    { title: 'Aayi nai(From "Stree 2")', src: "/assets/Aayi Nai - Stree 2.mp3", cover: "/assets/4.png" },
    { title: "Badri Ki Dulhania", src: "/assets/Badri_Ki_Dulhania.mp3", cover: "/assets/5.png" },
    { title: "Party All Night", src: "/assets/Party_All_Night.mp3", cover: "/assets/6.png" },
    { title: "Party With The Bhoothnath", src: "/assets/Party_With_The_Bhoothnath.mp3", cover: "/assets/7.png" },
    { title: "Pushpa Pushpa-Pushpa 2", src: "/assets/Pushpa Pushpa - Pushpa 2 .mp3", cover: "/assets/8.png" },
    { title: "Tamma Tamma Again", src: "/assets/Tamma_Tamma_Again.mp3", cover: "/assets/9.png" },
    { title: "Tera Naam Liya", src: "/assets/Tera_Naam_Liya.mp3", cover: "/assets/10.png" },
    { title: "Tum Par Hum Hai Atke", src: "/assets/Tum_Par_Hum_Hai_Atke.mp3", cover: "/assets/11.png" },
    { title: "Udi Udi Jaye", src: "/assets/Udi_Udi_Jaye.mp3", cover: "/assets/12.png" },
    { title: "Urvashi", src: "/assets/Urvashi.mp3", cover: "/assets/13.png" },
    { title: "Vaddi Sharaban", src: "/assets/Vaddi_Sharaban.mp3", cover: "/assets/14.png" },
    { title: "Veer Ji Viyohn", src: "/assets/Veer_Ji_Viyohn.mp3", cover: "/assets/15.png" },
    { title: "Thumkeshwari", src: "/assets/Thumkeshwari.mp3", cover: "/assets/16.png" },
    { title: "Sauda Khara Khara", src: "/assets/Sauda_Khara_Khara.mp3", cover: "/assets/17.png" },
    { title: "Hukum -in hindi", src: "/assets/Hukum.mp3", cover: "/assets/18.png" },
    { title: "Dil Chori", src: "/assets/Dil_Chori.mp3", cover: "/assets/19.png" },
    { title: "Desi Desi Na Bolya Kar", src: "/assets/Desi_Desi_Na_Bolya_Kar.mp3", cover: "/assets/20.png" },
    { title: "Dilbar", src: "/assets/Dilbar.mp3", cover: "/assets/21.png" },
    { title: "Khamoshiyan", src: "/assets/Khamoshiyan.mp3", cover: "/assets/22.png" },
    { title: "Koka", src: "/assets/Koka.mp3", cover: "/assets/23.png" },
    { title: "Sheli Ki Jawani", src: "/assets/Sheila_Ki_Jawani.mp3", cover: "/assets/24.png" },
    { title: "Sunny Sunny", src: "/assets/Sunny_Sunny.mp3", cover: "/assets/25.png" },
    { title: "Tera Hone Laga Hoon", src: "/assets/Tera_Hone_Laga_Hoon.mp3", cover: "/assets/26.png" },
    { title: "Gulabi Aankhen", src: "/assets/Gulabi_Aankhen.mp3", cover: "/assets/27.png" },
    { title: "Dil Diyan Gallan", src: "/assets/Dil_Diyan_Gallan.mp3", cover: "/assets/28.png" },
    { title: "Woh Din", src: "/assets/Woh_Din.mp3", cover: "/assets/29.png" },
    { title: "Tum Hi Ho", src: "/assets/Tum_Hi_Ho.mp3", cover: "/assets/30.png" },
];

const Player = () => {
    const [currentSong, setCurrentSong] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume,] = useState(1);
    const soundRef = useRef();

    const playSong = () => {
        if (soundRef.current) soundRef.current.stop();

        soundRef.current = new Howl({
            src: [songs[currentSong].src],
            html5: true,
            volume: volume,
            onend: () => nextSong(),
        });

        soundRef.current.play();
        setIsPlaying(true);
    };

    const pauseSong = () => {
        if (soundRef.current) {
            soundRef.current.pause();
            setIsPlaying(false);
        }
    };

    const nextSong = () => {
        setCurrentSong((prev) => (prev + 1) % songs.length);
        setIsPlaying(false);
    };

    const prevSong = () => {
        setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
        setIsPlaying(false);
    };



    return (
        <div className="player-container">
            <h1>Music Player</h1>
            <div className="player">
                <img src={songs[currentSong].cover} alt="Album Cover" className="cover" />
                <h2>{songs[currentSong].title}</h2>

                <div className="controls">
                    <FaStepBackward onClick={prevSong} />
                    {isPlaying ? <FaPause onClick={pauseSong} /> : <FaPlay onClick={playSong} />}
                    <FaStepForward onClick={nextSong} />
                </div>
            </div>
        </div>
    );
};

export default Player;
