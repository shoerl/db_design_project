# Database Design (CS3200) Project

<ins>1. Name of Project</ins>

Music Storage Model

<ins>2. Name of the team</ins>

Named 'CS Group' on Canvas

<ins>3. Team Members / Sections</ins>

Sean Hoerl, Nick Zoarski, George Littlefield (all in 1:35pm Tue/Fri section)

<ins>4. Brief description of the project</ins>

We have come up with a basic data model for storing artists, their albums, and the songs that exist within those albums. A possible use case is a music label trying to catalog all of its artists, albums, and songs. The current model would allow artists to log in as themselves and add their own songs and albums. The data model could also be expanded to add support for featured artists (songs with multiple artists), bands, and labels.

<ins>5. Link to UML diagram</ins>

<ins>6. Description of the user data model</ins>

For our user data model we decided to make a artist entity, which represents a artist and also a user of the website. This made sense for the use case of artists logging in as themselves and cataloging their own music. The use case for a band would be to have one member sign up, and then represent the band. The fields we have currently in this model are the first name of the artist in string form, last name of the artist in string form, username of the artist in string form, password of the artist in string form, email of the artist in string form, date of birth of the artist in date form, and their artist name in string form.

<ins>7. Description of the two domain object data models</ins>

1. The first domain object we have is a album entity, which represents a album from a artist. This made sense for a music data model. The fields for the album are the title of the album in string form, the artwork path in string form (for displaying the artwork of album on website), and the release date of the album in date form. The album would also have a foreign key to the artist who owns the album. We considered putting a genre for the album too, but decided it fit better in the song entity as a album could have songs of differing genres.
2. The second domain object we have is a song entity, which represents a song from a album. The fields for the a song are the title of the song in string form, the length of the song in decimal form (bigdecimal in java), the genre of the song in genre form, and explicitness of the song which is a boolean (boolean in java, tinyint in sql). We chose to use tinyint to represent booleans here as it was the best option. The song would also have a foreign key to the album which the song belongs.

<ins>8. Description of the user to domain object relationship</ins>

The relationship between artists and album is our user to domain object relationship. It is a one to many relationship from artists to albums. This means that one artist can have many albums. The album holds a foreign key to the artist, which is how this relationship is accomplished. This relationship inherently makes sense in our domain.

<ins>9. Description of domain object to domain object relationship</ins>

Our domain object to domain object relationship is the relationship between albums and songs. It is a one to many relationship from albums to songs. This means that one album can have many songs. The song holds a foreign key to the album, which is how this relationship is accomplished. This relationship again inherently makes sense in our domain, as albums have many songs. This relationship also implies that there is a one to many relationship between artists and songs.

<ins>10. Description of the portable enumeration</ins>

We chose to use genre as our portable enumeration. It is implemented as varchar in the database since we were told not to use sql enum, but it will be a enumeration in java. This made sense as an enumeration because there are a fixed set of genres, and there should always be a genre associated with a song. The values we chose for genre are: BLUES, JAZZ, ROCK, COUNTRY, SOUL, DANCE, HIP-HOP, POP

<ins>11. Description of the user interface requirements</ins>
- Artist List - displays a list of all artists
- Artist Editor - displays a particular artist for editions or allows creating a new artist, and navigate to the albums for that artist
- ALbum List - displays a list of all albums or all albums for a particular artist
- Album Editor - displays a particular album for editing or allows creating a new album, and navigate to the songs for that album
- Song List - displays a list of all songs or all songs for a particular artist or all songs for a particular album
- Song Editor - displays a particular song for editing or allows creating a new song, and navigate to the artist/album associated
