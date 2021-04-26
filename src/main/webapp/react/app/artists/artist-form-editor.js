import artistService from "./artist-service"
const { useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const ArtistFormEditor = () => {
    const {id} = useParams();
    const [artist, setArtist] = useState([]);
    const history = useHistory();
    useEffect(() => {
        if (id !== "new") {
            findArtistById(id)
        }}, []);
    const findArtistById = (id) => artistService.findArtistById(id)
        .then(artist => setArtist(artist));
    const deleteArtist = (id) => artistService.deleteArtist(id)
        .then(() => history.goBack());
    const createArtist = (artist) => artistService.createArtist(artist)
        .then(() => history.goBack());
    const updateArtist = (id, newArtist) => artistService.updateArtist(id, newArtist)
        .then(() => history.goBack());
    return (
        <div>
            <h2>Artist Editor</h2>
            {artist.id && <span><button className="btn btn-primary"
                    onClick={() => history.push(`/artists/${artist.id}/albums`)}>
                View albums for {artist.artistName}
            </button><br/></span>}
            <label>Id</label>
            <input disabled value={artist.id}/><br/>
            <label>First Name</label>
            <input onChange={(e) =>
                setArtist(artist => ({...artist, firstName: e.target.value}))}
                   value={artist.firstName}/><br/>
            <label>Last Name</label>
            <input onChange={(e) =>
                setArtist(artist => ({...artist, lastName: e.target.value}))}
                   value={artist.lastName}/><br/>
            <label>Username</label>
            <input onChange={(e) =>
                setArtist(artist => ({...artist, username: e.target.value}))}
                   value={artist.username}/><br/>
            <label>Password</label>
            <input onChange={(e) =>
                setArtist(artist => ({...artist, password: e.target.value}))}
                   value={artist.password}/><br/>
            <label>Artist Name</label>
            <input onChange={(e) =>
                setArtist(artist => ({...artist, artistName: e.target.value}))}
                   value={artist.artistName}/><br/>
            <label>Email</label>
            <input onChange={(e) =>
                setArtist(artist => ({...artist, email: e.target.value}))}
                   value={artist.email}/><br/>
            <label>Date of Birth</label>
            <input type="date" onChange={(e) =>
                setArtist(artist => ({...artist, dateOfBirth: e.target.value}))}
                   value={artist.dateOfBirth}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {history.goBack()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteArtist(artist.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createArtist(artist)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateArtist(artist.id, artist)}>
                Save
            </button>
        </div>
    )
}

export default ArtistFormEditor
