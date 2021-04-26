const ALBUMS_URL = "http://localhost:8080/api/albums"
const ARTISTS_URL = "http://localhost:8080/api/artists"

export const findAllAlbums = () => fetch(ALBUMS_URL).then(response => response.json());

export const findAllAlbumsForArtist = (artistId) => fetch(`${ARTISTS_URL}/${artistId}/albums`).then(response => response.json());

export const findAlbumById = (id) => fetch(`${ALBUMS_URL}/${id}`).then(response => response.json());

export const deleteAlbum = (id) => fetch(`${ALBUMS_URL}/${id}`, {method: "DELETE"});

export const createAlbum = (album) => fetch(ALBUMS_URL,
    {method: "POST",
        body: JSON.stringify(album),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const createAlbumForArtist = (artistId, album) => fetch(`${ARTISTS_URL}/${artistId}/albums`,
    {method: "POST",
        body: JSON.stringify(album),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const updateAlbum = (id, album) => fetch(`${ALBUMS_URL}/${id}`,
    {method: "PUT",
        body: JSON.stringify(album),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export default {
    findAllAlbums,
    findAllAlbumsForArtist,
    findAlbumById,
    deleteAlbum,
    createAlbum,
    createAlbumForArtist,
    updateAlbum
}
