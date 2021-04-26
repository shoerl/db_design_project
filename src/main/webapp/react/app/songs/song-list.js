import songService from "./song-service"
const { Link, useHistory, useParams } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const SongList = () => {
    const {artistId, albumId, id} = useParams();
    const [songs, setSongs] = useState([]);
    const history = useHistory();
    useEffect(() => {findAllSongsForAlbum(albumId)}, []);
    const findAllSongsForAlbum = (albumId) => songService.findAllSongsForAlbum(albumId)
        .then(songs => setSongs(songs));
    return(
        <div>
            <h2>Song List for <Link to={`/artists/${artistId}`}> </Link></h2>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/artists/${artistId}/albums/${albumId}/songs/new`)}>
                Add Song
            </button>
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
