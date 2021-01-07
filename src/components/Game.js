import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const [currentPlayer, setcurrentPlayer] = useState(1)
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  

  const [poemLines, setPoemLines] = useState([]);
  const [isSubmitted, setisSubmitted] = useState(false);

  const setPlayer = (updatedPlayer) => {
    updatedPlayer = updatedPlayer += 1
    setcurrentPlayer(updatedPlayer)
  }


  const addPoemLine = (line) => {
    // const newLine = [...lines];

    const formatLines = FIELDS.map((field) => {
      if (field.key) {
        return line[field.key];
      } else {
        return field;
      }
    }).join(' ');  

    setPoemLines([...poemLines, formatLines])

    setcurrentPlayer(setPlayer);
    

    
  };
  const revealPoem = () => {
    setisSubmitted(true);
  }
  



  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission  />

      <PlayerSubmissionForm fields={FIELDS} sendSubmission={addPoemLine} index={currentPlayer} />

      <FinalPoem isSubmitted={isSubmitted} submissions={poemLines} revealPoem={revealPoem} />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
