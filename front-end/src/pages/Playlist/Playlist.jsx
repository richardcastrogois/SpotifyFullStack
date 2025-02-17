import React from 'react'
import './Playlist.css';
import ItemList from './ItemList/ItemList';
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

const Playlist = ({ type }) => {
  return (
    <>
      <div className="playlist">
        {/* Item List de Artistas */}
        {type === "artists" || type === undefined ? (
          <ItemList
            title="Artistas"
            items={10}
            itemsArray={artistArray}
            path="/artists"
            idPath="/artist"
          />
        ) : (
          <></>
        )}

        {/* Item List de Músicas */}
        {type === "songs" || type === undefined ? (
          <ItemList
            title="Músicas"
            items={20}
            itemsArray={songsArray}
            path="/songs"
            idPath="/song"
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Playlist
