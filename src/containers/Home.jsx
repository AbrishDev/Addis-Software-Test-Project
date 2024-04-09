// pages/Home.js
import React from 'react';
import { css } from '@emotion/react';
import Playlist from '../components/Playlist';

const Home = () => {
  return (
    <div
      css={css`
        padding: 20px;
      `}
    >
      <h2
        css={css`
          font-size: 24px;
          margin-bottom: 10px;
        `}
      >
        Home
      </h2>
      <Playlist />
    </div>
  );
};

export default Home;
