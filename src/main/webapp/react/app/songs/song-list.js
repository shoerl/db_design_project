import songService from "./song-service"
import artistService from "../artists/artist-service";
import albumService from "../albums/album-service";
const { Link, useHistory, useParams } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const SongList = () => {
    const {artistId, albumId, id} = useParams();
    const [songs, setSongs] = useState([]);
    const [album, setAlbum] = useState([]);
    const [artist, setArtist] = useState([]);
    const history = useHistory();
    useEffect(() => {findAllSongsForAlbum(albumId)}, []);
    useEffect(() => {findAlbumById(albumId)}, []);
    useEffect(() => {findArtistById(artistId)}, []);
    const findArtistById = (id) => artistService.findArtistById(id)
        .then(artist => setArtist(artist));
    const findAllSongsForAlbum = (albumId) => songService.findAllSongsForAlbum(albumId)
        .then(songs => setSongs(songs));
    const findAlbumById = (id) => albumService.findAlbumById(id)
        .then(album => setAlbum(album));
    return(
        <div>
            <h2>Song List {album && <span> for <Link to={`/artists/${artistId}/albums/${albumId}`}>{album.title}</Link></span>}</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/artists/${artistId}/albums/${albumId}/songs/new`)}>
                Add Song
            </button>
            {artist &&
            <button className="btn btn-primary"
                    onClick={() => history.push(`/artists/${artistId}/albums`)}>
                View albums for {artist.artistName}
            </button>}
            <ul className="list-group">
                {
                    songs.map(song =>
                        <li key={song.id}>
                            <Link to={`/artists/${artistId}/albums/${albumId}/songs/${song.id}`}>
                                {song.title},
                                {song.length},
                                {song.genre},
                                {String(song.explicit)}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )

}

export default SongList
