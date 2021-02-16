import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Question1 = lazy(() => import("./pages/quiz-section-2-01"))
const Question2 = lazy(() => import("./pages/quiz-section-2-02"))

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Question 1</Link>
            </li>
            <li>
              <Link to="/question-2">Question 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Suspense fallback={"loading..."}>
            <Route path="/question-2" exact>
              <Question2 />
            </Route>
            <Route path="/" exact>
              <Question1 />
            </Route>
          </Suspense>
        </Switch>
      </div>
    </Router>
  )
}

export default App
