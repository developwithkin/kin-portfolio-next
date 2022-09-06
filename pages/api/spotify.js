import axios from "axios";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENT_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessToken = async () => {
	const response = await axios({
		method: "POST",
		url: TOKEN_ENDPOINT,
		headers: {
			Authorization: `Basic ${Buffer.from(
				`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
			).toString("base64")}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		params: {
			grant_type: "refresh_token",
			refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
		},
	});

	return response.data;
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  const response = await axios({
    method: "GET",
    url: NOW_PLAYING_ENDPOINT,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response;
}

export const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();

  const response = await axios({
    method: "GET",
    url: RECENT_PLAYED_ENDPOINT,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response;
}

export default async function handler (req, res) {
  let response

  response = await getNowPlaying();

  let song, isPlaying, title, artist, album, albumImageUrl, songUrl;

  if (response.status === 204 || response.status > 400) {
    response = await getRecentlyPlayed();
    
    song = response.data;
    isPlaying = false;
    title = song.items[0].track.name;
    artist = song.items[0].track.artists.map((artist) => artist.name).join(", ");
    album = song.items[0].track.album.name;
    albumImageUrl = song.items[0].track.album.images[0].url;
    songUrl = song.items[0].track.external_urls.spotify;
  } else {
    song = response.data;
    isPlaying = song.is_playing;
    title = song.item.name;
    artist = song.item.artists.map((artist) => artist.name).join(", ");
    album = song.item.album.name;
    albumImageUrl = song.item.album.images[0].url;
    songUrl = song.item.external_urls.spotify;
  }


  return res.status(200).json({
    isPlaying,
    title,
    artist,
    album,
    albumImageUrl,
    songUrl,
  })
}
