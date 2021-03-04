import s from './content.module.css'
import StartPage from './StartPage/StartPage'
import GamePage from './GamePage/GamePage'
import {Switch, Route, Redirect} from 'react-router-dom'

function Content() {
    return (
      <div className={s.content}>
        <Switch>
            <Route path={'/'} component={StartPage}/>
            <Route path={'/game'} component={GamePage}/>
            <Route path={'*'} render={() => <Redirect to='/'/>}/>
        </Switch>
      </div>
    );
  }
  
  export default Content;
  