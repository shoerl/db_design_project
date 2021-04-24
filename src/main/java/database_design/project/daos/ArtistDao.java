package database_design.project.daos;

import database_design.project.models.Artist;
import database_design.project.repositories.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ArtistDao {
    @Autowired
    ArtistRepository artistRepository;

    @PostMapping("/api/artists")
    public Artist createArtist(@RequestBody Artist artist) {
        return artistRepository.save(artist);
    }

    @GetMapping("/api/artists")
    public List<Artist> findAllArtists() {
        return artistRepository.findAllArtists();
    }

    @GetMapping("/api/artists/{artistId}")
    public Artist findArtistById(@PathVariable("artistId") Integer id) {
        return artistRepository.findArtistById(id);
    }

    @PutMapping("/api/artists/{artistId}")
    public Artist updateArtist(@PathVariable("artistId") Integer id,
                               @RequestBody Artist artistUpdated) {
        Artist oldArtist = artistRepository.findArtistById(id);
        oldArtist.replaceAllAttributes(artistUpdated);
        return artistRepository.save(oldArtist);
    }

    @DeleteMapping("/api/artists/{artistId}")
    public void deleteArtist(@PathVariable("artistId") Integer id) {
        artistRepository.deleteById(id);
    }

}
