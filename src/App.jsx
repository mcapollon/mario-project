import { useEffect, useRef } from 'react';
import './App.css';
import 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';
import TitleScene from './scenes/TitleScene';

function App() {
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      pixelArt: true,
      roundPixels: true,
      parent: 'content',
      width: 400,
      height: 240,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {
            y: 800
          },
          debug: false
        }
      },
      scene: [
        BootScene,
        TitleScene,
        GameScene
      ]
    };

    // Initialize the game
    gameRef.current = new Phaser.Game(config);

    // Cleanup function to destroy the game when component unmounts
    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
      }
    };
  }, []);

  return (
    
    <div id="content"></div>
  );
}

export default App;
