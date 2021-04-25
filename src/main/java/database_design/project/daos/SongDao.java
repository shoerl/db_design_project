package database_design.project.daos;

import database_design.project.models.Album;
import database_design.project.models.Song;
import database_design.project.repositories.AlbumRepository;
import database_design.project.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SongDao {
    @Autowired
    SongRepository songRepository;

    @Autowired
    AlbumRepository albumRepository;

    @PostMapping("/api/songs")
    public Song createSong(@RequestBody Song song) {
        return songRepository.save(song);
    }

    @PostMapping("/api/albums/{albumId}/songs")
    public Song createSongForAlbum(@PathVariable("albumId") Integer aid,
                                   @RequestBody Song song) {
        Album album = albumRepository.findAlbumById(aid);
        song.setAlbum(album);
        return songRepository.save(song);
    }

    @GetMapping("/api/albums/{albumId}/songs")
    public List<Song> findSongsForAlbum(@PathVariable("albumId") Integer aid) {
        return songRepository.findSongsByAlbumId(aid);
    }

    @GetMapping("/api/songs")
    public List<Song> findAllSongs() {
        return songRepository.findAllSongs();
    }

    @PutMapping("/api/songs/{songId}")
    public Song updateSong(@PathVariable("songId") Integer sid,
                           @RequestBody Song updatedSong) {
        Song song = songRepository.findSongById(sid);
        song.replaceAllAttributes(updatedSong);
        return songRepository.save(song);
    }
}
