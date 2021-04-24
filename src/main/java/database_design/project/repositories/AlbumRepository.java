package database_design.project.repositories;

import database_design.project.models.Album;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AlbumRepository extends CrudRepository<Album, Integer> {

    @Query(value = "SELECT * FROM album", nativeQuery = true)
    public List<Album> findAllAlbums();

    @Query(value = "SELECT * FROM album WHERE id=:albumId", nativeQuery = true)
    public Album findAlbumById(@Param("albumId") Integer id);

    @Query(value = "SELECT * FROM album WHERE artist_id=:artistId", nativeQuery = true)
    public List<Album> findAlbumsByArtistId(@Param("artistId") Integer id);
}
