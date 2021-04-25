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
            <button className="btn btn-primary">
                Add Artist
            </button>
            <ul className="list-group">
                {
                    artists.map(artist =>
                        <li key={artist.id}>
                                {artist.firstName},
                                {artist.lastName},
                                {artist.username}
                        </li>
                    )
                }

            </ul>
        </div>
    )
}

export default ArtistList
