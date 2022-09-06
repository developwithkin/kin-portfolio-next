import { createContext, useState } from "react";

export const SpotifyContext = createContext({
  nowPlaying: {},
});

export const SpotifyContextProvider = (props) => {
  const [nowPlaying, setNowPlaying] = useState({});

  return (
    <SpotifyContext.Provider value={{ nowPlaying, setNowPlaying }}>
      {props.children}
    </SpotifyContext.Provider>
  );
}
