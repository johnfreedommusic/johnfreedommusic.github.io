import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const StyledSongTile = styled.div`
  .artwork-tile {
    position: relative;
    aspect-ratio: 1 / 1;
    border: var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--bs-body-bg);
    border-radius: 8px;
  }

  .artwork-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    gap: 0.5rem;
  }

  .artwork-tile:hover .overlay,
  .artwork-tile:focus-within .overlay {
    opacity: 1;
  }

  .platforms {
    display: flex;
    gap: 1rem;
  }

  .platform-link {
    color: #fff;
    font-size: 2rem;
  }

  audio {
    width: 100%;
  }

  .song-title {
    margin-top: 1rem;
    text-align: center;
    font-weight: bold;
  }
`;

const SongTile = ({ song }) => (
  <StyledSongTile>
    <div className="artwork-tile">
      <img
        src={song.artwork}
        alt={song.name}
        className="artwork-img"
        loading="lazy"
      />
      {(Object.values(song.links).some(Boolean) || song.previewUrl) && (
      <div className="overlay">
        <div className="platforms">
          {song.links.spotify && (
            <a href={song.links.spotify} className="platform-link" aria-label="Open in Spotify" target="_blank" rel="noreferrer">
              <Icon icon="fa6-brands:spotify" />
            </a>
          )}
          {song.links.appleMusic && (
            <a href={song.links.appleMusic} className="platform-link" aria-label="Open in Apple Music" target="_blank" rel="noreferrer">
              <Icon icon="fa6-brands:apple" />
            </a>
          )}
          {song.links.amazonMusic && (
            <a href={song.links.amazonMusic} className="platform-link" aria-label="Open in Amazon Music" target="_blank" rel="noreferrer">
              <Icon icon="fa6-brands:amazon" />
            </a>
          )}
          {song.links.soundcloud && (
            <a href={song.links.soundcloud} className="platform-link" aria-label="Open in SoundCloud" target="_blank" rel="noreferrer">
              <Icon icon="fa6-brands:soundcloud" />
            </a>
          )}
        </div>
        {song.previewUrl && (
          <audio controls preload="none">
            <source src={song.previewUrl} />
            Il tuo browser non supporta la riproduzione audio.
          </audio>
        )}
      </div>
      )}
    </div>
    <div className="song-title">
      <strong>{song.name}</strong>
    </div>
  </StyledSongTile>
);

export default SongTile;
