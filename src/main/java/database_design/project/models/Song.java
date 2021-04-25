package database_design.project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "song")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    private String title;
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    private BigDecimal length;
    public BigDecimal getLength() { return length; }
    public void setLength(BigDecimal length) { this.length = length; }

    @Enumerated(EnumType.STRING)
    private Genre genre;
    public Genre getGenre() { return genre; }
    public void setGenre(Genre genre) { this.genre = genre; }

    private Boolean explicit;
    public Boolean getExplicit() { return explicit; }
    public void setExplicit(Boolean explicit) { this.explicit = explicit; }

    @ManyToOne
    @JsonIgnore
    private Album album;
    public Album getAlbum() { return album; }
    public void setAlbum(Album album) { this.album = album; }

    public Song(Integer id, String title, BigDecimal length, Genre genre, Boolean explicit, Album album) {
        this.id = id;
        this.title = title;
        this.length = length;
        this.genre = genre;
        this.explicit = explicit;
        this.album = album;
    }

    public Song() {}

    public void replaceAllAttributes(Song updatedSong) {
        this.setTitle(updatedSong.getTitle());
        this.setLength(updatedSong.getLength());
        this.setGenre(updatedSong.getGenre());
        this.setExplicit(updatedSong.getExplicit());
        this.setAlbum(updatedSong.getAlbum());
    }

}
