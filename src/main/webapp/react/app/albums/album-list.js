import albumService from "./album-service"
import artistService from "../artists/artist-service";
const { Link, useHistory, useParams } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const AlbumList = () => {
    const {artistId} = useParams();
    const [albums, setAlbums] = useState([]);
    const [artist, setArtist] = useState([]);
    const history = useHistory();
    useEffect(() => {findAllAlbumsForArtist(artistId)}, []);
    useEffect(() => {findArtistById(artistId)}, []);
    const findAllAlbumsForArtist = (artistId) => albumService.findAllAlbumsForArtist(artistId)
        .then(albums => setAlbums(albums));
    const findArtistById = (id) => artistService.findArtistById(id)
        .then(artist => setArtist(artist));
    return(
        <div>
            <h2>Album List {artist && <span> for <Link to={`/artists/${artistId}`}>{artist.artistName}</Link></span>}</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/artists/${artistId}/albums/new`)}>
                Add Album
            </button>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/artists/`)}>
                View artists
            </button>
            <ul className="list-group">
                {
                    albums.map(album =>
                        <li key={album.id}>
                            <Link to={`/artists/${artistId}/albums/${album.id}`}>
                                {album.title},
                                {album.dateReleased},
                                {album.artworkPath}
                            </Link>
                            <Link to={`/artists/${artistId}/albums/${album.id}/songs`}>
                                <button className="btn btn-primary">
                                    Songs
                                </button>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )

}

export default AlbumList
