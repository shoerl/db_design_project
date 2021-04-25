package database_design.project.repositories;

import database_design.project.models.Album;
import database_design.project.models.Song;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SongRepository extends CrudRepository<Song, Integer> {

    @Query(value = "SELECT * FROM song", nativeQuery = true)
    public List<Song> findAllSongs();

    @Query(value = "SELECT * FROM song WHERE id=:songId", nativeQuery = true)
    public Song findSongById(@Param("songId") Integer id);

    @Query(value = "SELECT * FROM song where album_id=:albumId", nativeQuery = true)
    public List<Song> findSongsByAlbumId(@Param("albumId") Integer id);

}
