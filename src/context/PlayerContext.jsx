// context/PlayerContext.js
import { createContext, useState } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);

    return (
        <PlayerContext.Provider value={{ isPlaying, setIsPlaying, currentTrack, setCurrentTrack }}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerContext;
