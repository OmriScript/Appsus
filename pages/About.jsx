const { NavLink, Route, Switch } = ReactRouterDOM

function AboutTeam() {
  return (
    <div className="about-team">
      <h4>The Team</h4>
      <ol className="clean-list">
        <li>Idan Levi</li>
        <li>Omri Madar</li>
      </ol>
    </div>
  )
}

function AboutVision() {
  return (
    <div className="about-vision">
      <h4 >Our Vision</h4>
      <ul className="clean-list">
        <li>Code</li>
        <li>Eat</li>
        <li>Sleep</li>
        <li>Repeat()</li>
      </ul>
    </div>
  )
}

export function About() {
  return <section className="about-container  container flex column flex-start align-center">
    <h2>About Us</h2>
    <p>After only 9 academic hours of learning react from scratch,
    </p>
    <p>We joined forces and build this useful app in 96 hours as part of Coding-Academy course.</p>
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