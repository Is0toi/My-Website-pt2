import React, { useEffect, useState } from "react";

function Discord() {
    const [spotifyData, setSpotifyData] = useState(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await fetch(`https://api.lanyard.rest/v1/users/693225286237552640`);
                const json = await response.json();
                if (json.success) {
                    const spotify = json.data.listening_to_spotify ? json.data.spotify : null;
                    setSpotifyData(spotify);
                }
                else {
                    setSpotifyData(null);
                }
            }
            catch (error) {
                console.error("eRrOR: ", error);
                setSpotifyData(null);
            }
        };

        fetchStatus();
        const interval = setInterval(fetchStatus, 15000);
        return () => clearInterval(interval);
    }, []);

    if (!spotifyData) {
        return <p style={{ textAlign: "center" }}> Isotoi is not listening to Spotify right now!</p>;
    }

    return (
        <div style={{ textAlign: "center" }}>
            <a href={`https://open.spotify.com/track/${spotifyData.track_id}`} target="_blank" rel="noopener noreferrer">
                <div class="spotify">
                    <h2> Now playing on Spotify:</h2>
                    <p><strong> {spotifyData.song}</strong> by {spotifyData.artists}</p>
                    <img className="album" src={spotifyData.album_art_url} alt="Album cover" />
                    <p>Album: {spotifyData.album}</p>
                </div>
            </a>
        </div>
    );
}

export default Discord;
