import ArtistList from "./artists/artist-list";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/artists", "/"]} exact={true}>
                    <ArtistList/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
