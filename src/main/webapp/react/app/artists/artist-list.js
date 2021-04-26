import artistService from "./artist-service"
const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const ArtistList = () => {
    const history = useHistory();
    const [artists, setArtists] = useState([]);
    useEffect(() => {findAllArtists()}, []);
    const findAllArtists = () => artistService.findAllArtists()
        .then(artists => setArtists(artists));
    return(
        <div>
            <h2>Artist List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/artists/new")}>
                Add Artist
            </button>
            <ul className="list-group">
                {
                    artists.map(artist =>
                        <li key={artist.id}>
                            <Link to={`/artists/${artist.id}`}>
                                {artist.firstName},
                                {artist.lastName},
                                {artist.username},
                                {artist.artistName},
                                {artist.email},
                                {artist.dateOfBirth}
                            </Link>
                            <Link to={`/artists/${artist.id}/albums`}>
                                <button className="btn btn-primary">
                                    Albums
                                </button>
                            </Link>
                        </li>
                    )
                }

            </ul>
        </div>
    )
}

export default ArtistList
