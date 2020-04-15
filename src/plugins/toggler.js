import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class ThemeTogglerPlugin extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          const iconClass =
            theme === "light" ? "fa fa-moon-o fa-2x " : "fa fa-sun-o fa-2x "
          return (
            <button
              className="toggler-mode"
              onClick={() => {
                const nextTheme = theme === "light" ? "dark" : "light"
                toggleTheme(nextTheme)
              }}
            >
              <i className={iconClass} />
            </button>
          )
        }}
      </ThemeToggler>
    )
  }
}

export default ThemeTogglerPlugin
