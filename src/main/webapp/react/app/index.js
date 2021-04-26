import ArtistList from "./artists/artist-list";
import ArtistFormEditor from "./artists/artist-form-editor";
import AlbumList from "./albums/album-list";
import AlbumFormEditor from "./albums/album-form-editor";
import SongList from "./songs/song-list";
import SongFormEditor from "./songs/song-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/artists", "/"]} exact={true}>
                    <ArtistList/>
                </Route>
                <Route path="/artists/:id" exact={true}>
                    <ArtistFormEditor/>
                </Route>
                <Route path="/artists/:artistId/albums" exact={true}>
                    <AlbumList/>
                </Route>
                <Route path="/artists/:artistId/albums/:id" exact={true}>
                    <AlbumFormEditor/>
                </Route>
                <Route path="/artists/:artistId/albums/:albumId/songs" exact={true}>
                    <SongList/>
                </Route>
                <Route path="/artists/:artistId/albums/:albumId/songs/:id" exact={true}>
                    <SongFormEditor/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;
