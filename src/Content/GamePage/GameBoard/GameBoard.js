import s from './gameBoard.module.css'
import CharacterCard from './CharacterCard'

function GameBoard() {
    return (
      <div className={s.gameBoard}>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
      </div>
    );
  }
  
  export default GameBoard;
  