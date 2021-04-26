import albumService from "./album-service"
const { useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const AlbumFormEditor = () => {
    const {artistId, id} = useParams();
    const [album, setAlbum] = useState([]);
    const history = useHistory();
    useEffect(() => {
        if (id !== "new") {
            findAlbumById(id)
        }}, []);
    const findAlbumById = (id) => albumService.findAlbumById(id)
        .then(album => setAlbum(album));
    const deleteAlbum = (id) => albumService.deleteAlbum(id)
        .then(() => history.goBack());
    const createAlbumForArtist = (artistId, album) => albumService.createAlbumForArtist(artistId, album)
        .then(() => history.goBack());
    const updateAlbum = (id, newAlbum) => albumService.updateAlbum(id, newAlbum)
        .then(() => history.goBack());
    return (
        <div>
            <h2>Album Editor</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/artists/${artistId}/albums/${album.id}/songs`)}>
                View songs for {album.title}
            </button><br/>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/artists/${artistId}`)}>
                Edit artist
            </button><br/>
            <label>Id</label>
            <input disabled value={album.id}/><br/>
            <label>Title</label>
            <input onChange={(e) =>
                setAlbum(album => ({...album, title: e.target.value}))}
                   value={album.title}/><br/>
            <label>Release Date</label>
            <input type="date" onChange={(e) =>
                setAlbum(album => ({...album, dateReleased: e.target.value}))}
                   value={album.dateReleased}/><br/>
            <label>Artwork Path</label>
            <input onChange={(e) =>
                setAlbum(album => ({...album, artworkPath: e.target.value}))}
                   value={album.artworkPath}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {history.goBack()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteAlbum(album.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createAlbumForArtist(artistId, album)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateAlbum(album.id, album)}>
                Save
            </button>
        </div>
    )
}

export default AlbumFormEditor
