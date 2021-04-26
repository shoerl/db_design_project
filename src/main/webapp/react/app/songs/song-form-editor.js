import songService from "./song-service"
const { useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const SongFormEditor = () => {
    const {artistId, albumId, id} = useParams();
    const [song, setSong] = useState([]);
    const history = useHistory();
    useEffect(() => {
        if (id !== "new") {
            findSongById(id)
        }}, []);
    const findSongById = (id) => songService.findSongById(id)
        .then(song => setSong(song));
    const deleteSong = (id) => songService.deleteSong(id)
        .then(() => history.goBack());
    const createSongForAlbum = (albumId, song) => songService.createSongForAlbum(albumId, song)
        .then(() => history.goBack());
    const updateSong = (id, newSong) => songService.updateSong(id, newSong)
        .then(() => history.goBack());
    return(
        <div>
            <h2>Song Editor</h2>
            <label>Id</label>
            <input disabled value={song.id}/><br/>
            <label>Title</label>
            <input onChange={(e) =>
                setSong(song => ({...song, title: e.target.value}))}
                   value={song.title}/><br/>
            <label>Length</label>
            <input onChange={(e) =>
                setSong(song => ({...song, length: e.target.value}))}
                   value={song.length}/><br/>
            <label>Genre</label>
            <select onChange={(e) =>
                setSong(song => ({...song, genre: e.target.value}))}
                   value={song.genre}>
                <option>BLUES</option>
                <option>JAZZ</option>
                <option>ROCK</option>
                <option>COUNTRY</option>
                <option>SOUL</option>
                <option>DANCE</option>
                <option>HIPHOP</option>
                <option>POP</option>
            </select><br/>
            <label>Explicit</label>
            <input type="checkbox" onChange={(e) =>
                setSong(song => ({...song, explicit: e.target.checked}))}
                   checked={song.explicit}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {history.goBack()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteSong(song.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createSongForAlbum(albumId, song)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateSong(song.id, song)}>
                Save
            </button>
        </div>
    )

}

export default SongFormEditor
