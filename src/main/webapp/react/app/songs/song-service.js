const SONGS_URL = "http://localhost:8080/api/songs"
const ALBUMS_URL = "http://localhost:8080/api/albums"

export const findAllSongs = () => fetch(SONGS_URL).then(response => response.json());

export const findAllSongsForAlbum = (albumId) => fetch(`${ALBUMS_URL}/${albumId}/songs`).then(response => response.json());

export const findSongById = (id) => fetch(`${SONGS_URL}/${id}`).then(response => response.json());

export const deleteSong = (id) => fetch(`${SONGS_URL}/${id}`, {method: "DELETE"});

export const createSong = (song) => fetch(SONGS_URL,
    {method: "POST",
        body: JSON.stringify(song),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const createSongForAlbum = (albumId, song) => fetch(`${ALBUMS_URL}/${albumId}/songs`,
    {method: "POST",
        body: JSON.stringify(song),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const updateSong = (id, song) => fetch(`${SONGS_URL}/${id}`,
    {method: "PUT",
        body: JSON.stringify(song),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export default {
    findAllSongs,
    findAllSongsForAlbum,
    findSongById,
    deleteSong,
    createSong,
    createSongForAlbum,
    updateSong
}
