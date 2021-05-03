const { NavLink, Route, Switch } = ReactRouterDOM

function AboutTeam() {
  return (
    <div>
      <h4>The Team</h4>
      <ol>
        <li>Idan Levi</li>
        <li>Omri Madar</li>
      </ol>
    </div>
  )
}

function AboutVision() {
  return (
    <div>
      <h4>Our Vision</h4>
      <ul>
        <li>Code</li>
        <li>Eat</li>
        <li>Sleep</li>
        <li>Repeat</li>
      </ul>
    </div>
  )
}

export function About() {
  return <section className="container">
    <h2>About Us</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, quis.</p>

    <nav>
      <NavLink to="/about/team">Team</NavLink>
      <NavLink to="/about/vision">Vision</NavLink>
    </nav>

    <Switch>
      <Route component={AboutTeam} path="/about/team" />
      <Route component={AboutVision} path="/about/vision" />
    </Switch>
  </section>
}