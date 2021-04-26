package database_design.project.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "artist")
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    private String firstName;
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    private String lastName;
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    private String username;
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    private String password;
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    private String email;
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateOfBirth;
    public Date getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(Date dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    private String artistName;
    public String getArtistName() { return artistName; }
    public void setArtistName(String artistName) { this.artistName = artistName; }

    public Artist(Integer id, String firstName, String lastName, String username,
                  String password, String email, Date dateOfBirth, String artistName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.artistName = artistName;
    }

    public void replaceAllAttributes(Artist updatedArtist) {
        this.setFirstName(updatedArtist.getFirstName());
        this.setLastName(updatedArtist.getLastName());
        this.setUsername(updatedArtist.getUsername());
        this.setPassword(updatedArtist.getPassword());
        this.setEmail(updatedArtist.getEmail());
        this.setDateOfBirth(updatedArtist.getDateOfBirth());
        this.setArtistName(updatedArtist.getArtistName());
    }

    public Artist() {}

}
