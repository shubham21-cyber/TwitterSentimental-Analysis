import { BrowserRouter as Router, Route } from "react-router-dom";
import Graphs from "./Components/AnalysisHistory/Graphs";
import SendEmail from "./Components/AnalysisHistory/SendEmail";
import Tweets from "./Components/AnalysisHistory/Tweets";
import ViewSentiments from "./Components/AnalysisHistory/ViewSentiments";
import UpdateConfiguration from "./Components/Configurations/UpdateConfiguration";
import Index from "./Components/Index";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import ChangePassword from "./Components/MyAccount/ChangePassword";
import Profile from "./Components/MyAccount/Profile";
import NewAnalysis from "./Components/SentimentalAnalysis/NewAnalysis";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login}></Route>
        <Route path="/Index" component={Index}></Route>
        <Route path="/Register" component={Register}></Route>
        <Route
          path="/UpdateConfiguration"
          component={UpdateConfiguration}
        ></Route>
        <Route path="/NewAnalysis" component={NewAnalysis}></Route>
        <Route path="/Sentiments" component={ViewSentiments}></Route>
        <Route path="/Tweets" component={Tweets}></Route>
        <Route path="/Graphs" component={Graphs}></Route>
        <Route path="/Profile" component={Profile}></Route>
        <Route path="/ChangePassword" component={ChangePassword}></Route>
        <Route path="/Email" component={SendEmail}></Route>
      </Router>
    </>
  );
}

export default App;
