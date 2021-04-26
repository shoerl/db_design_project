package database_design.project.daos;

import database_design.project.models.Album;
import database_design.project.models.Artist;
import database_design.project.repositories.AlbumRepository;
import database_design.project.repositories.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AlbumDao {
    @Autowired
    AlbumRepository albumRepository;

    @Autowired
    ArtistRepository artistRepository;

    @PostMapping("/api/albums")
    public Album createAlbum(@RequestBody Album album) {
        return albumRepository.save(album);
    }

    @PostMapping("/api/artists/{artistId}/albums")
    public Album createAlbumForArtist(@PathVariable("artistId") Integer aid,
                                      @RequestBody Album album) {
        Artist artist = artistRepository.findArtistById(aid);
        album.setArtist(artist);
        return albumRepository.save(album);
    }

    @GetMapping("/api/artists/{artistId}/albums")
    public List<Album> findAlbumsForArtist(@PathVariable("artistId") Integer artistId) {
        return albumRepository.findAlbumsByArtistId(artistId);
    }

    @GetMapping("/api/albums")
    public List<Album> findAllAlbums() {
        return albumRepository.findAllAlbums();
    }

    @GetMapping("/api/albums/{albumId}")
    public Album findAlbumById(@PathVariable("albumId") Integer id) {
        return albumRepository.findAlbumById(id);
    }

    @PutMapping("/api/albums/{albumId}")
    public Album updateAlbum(@PathVariable("albumId") Integer aid,
                             @RequestBody Album updatedAlbum) {
        Album album = albumRepository.findAlbumById(aid);
        album.replaceAllAttributes(updatedAlbum);
        return albumRepository.save(album);
    }

    @DeleteMapping("/api/albums/{albumId}")
    public void deleteAlbum(@PathVariable("albumId") Integer id) {
        albumRepository.deleteById(id);
    }
}
