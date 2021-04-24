package database_design.project.repositories;

import database_design.project.models.Artist;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArtistRepository extends CrudRepository<Artist, Integer> {

    @Query(value = "SELECT * FROM artist", nativeQuery = true)
    public List<Artist> findAllArtists();

    @Query(value = "SELECT * FROM artist WHERE id=:artistId", nativeQuery = true)
    public Artist findArtistById(@Param("artistId") Integer id);
}
