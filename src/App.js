import { Route, Switch } from "react-router-dom"
import { ThemeProvider} from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import MySkillsPage from './components/MySkillsPage'
import SoundBar from "./subComponents/SoundBar";

function App() {
  return <>

  <GlobalStyle />


<ThemeProvider theme={lightTheme}>
<SoundBar/>
    <Switch>
    <Route exact path="/" component={Main}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/projects" component={ProjectsPage}/>
    <Route exact path="/skills" component={MySkillsPage}/>
  </Switch>
</ThemeProvider>

    
    </>
    
}

export default App

