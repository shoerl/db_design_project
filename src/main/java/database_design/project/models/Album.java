package database_design.project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "album")
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    private String title;
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    private String artworkPath;
    public String getArtworkPath() { return artworkPath; }
    public void setArtworkPath(String artworkPath) { this.artworkPath = artworkPath; }

    private Date dateReleased;
    public Date getDateReleased() { return dateReleased; }
    public void setDateReleased(Date dateReleased) { this.dateReleased = dateReleased; }

    @ManyToOne
    @JsonIgnore
    private Artist artist;
    public Artist getArtist() { return artist; }
    public void setArtist(Artist artist) { this.artist = artist; }

    public Album(Integer id, String title, String artworkPath, Date dateReleased, Artist artist) {
        this.id = id;
        this.title = title;
        this.artworkPath = artworkPath;
        this.dateReleased = dateReleased;
        this.artist = artist;
    }

    public Album() {}

    public void replaceAllAttributes(Album updatedAlbum) {
        this.setTitle(updatedAlbum.getTitle());
        this.setArtworkPath(updatedAlbum.getArtworkPath());
        this.setDateReleased(updatedAlbum.getDateReleased());
        this.setArtist(updatedAlbum.getArtist());
    }
}
