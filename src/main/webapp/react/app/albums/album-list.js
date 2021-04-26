import albumService from "./album-service"
const { Link, useHistory, useParams } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const AlbumList = () => {
    const {artistId} = useParams();
    const [albums, setAlbums] = useState([]);
    const history = useHistory();
    useEffect(() => {findAllAlbumsForArtist(artistId)}, []);
    const findAllAlbumsForArtist = (artistId) => albumService.findAllAlbumsForArtist(artistId)
        .then(albums => setAlbums(albums));
    return(
        <div>
            <h2>Album List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/artists/${artistId}/albums/new`)}>
                Add Album
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
