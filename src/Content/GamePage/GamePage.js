import s from './gamePage.module.css'
import SideBar from './SideBar/SideBar'
import GameBoard from './GameBoard/GameBoard'
import UserMenu from './UserMenu/UserMenu'

function GamePage() {
    return (
      <div className={s.gamePage}>
          <SideBar/>
          <GameBoard/>
          <UserMenu/>
      </div>
    );
  }
  
  export default GamePage;
  