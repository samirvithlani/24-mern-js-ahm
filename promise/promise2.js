const generateSongs = () => {
  var songs = [
    {
      title: "Song 1",
      artist: "Artist 1",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
    },
  ];

  return new Promise((success, failure) => {
    setTimeout(() => {
      success(songs);
    }, 3000);
  });
};

const createPlaylist = (songsData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: "Playlist has been created",
        songs: songsData,
      });
    }, 2000);
  });
};

const playSongs = () => {
  console.log("start");
  generateSongs()
    .then((songs) => {
      console.log("songs...", songs);
      createPlaylist(songs)
        .then((playlist) => {
          console.log("Playlist...", playlist);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
playSongs();

//callback hell
