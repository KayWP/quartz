import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Menu: QuartzComponent = () => {
  return (
    <nav class="menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/explore">Explore</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  )
}

Menu.css = `
.menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu li {
  margin: 0.5rem 0;
}

.menu a {
  color: var(--dark);
  text-decoration: none;
}

.menu a:hover {
  text-decoration: underline;
}
`

export default (() => Menu) satisfies QuartzComponentConstructor