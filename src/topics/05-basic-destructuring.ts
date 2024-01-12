interface AudioPlayer {
    audioVolumen: number
    songDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string;
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}
//desestructuración de objetos
const { song:anotherSong, audioVolumen } = audioPlayer;
//forma 1 para desestructurar un objeto dentro de un objeto
const { details } = audioPlayer;
const { author } = details
//forma 2 para desestructurar un objeto dentro de un objeto
const { details: { year } } = audioPlayer;

console.log(anotherSong, year, author, audioVolumen)
export { };