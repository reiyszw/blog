import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import DayIcon from "./../assets/svg/sun.svg"
import NightIcon from "./../assets/svg/moon.svg"

class ThemeTogglerPlugin extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          const handleIcon =
            theme === "light" ? (
              <img
                src={DayIcon}
                alt="day icon"
                className="toggler-mode__image"
              />
            ) : (
              <img
                src={NightIcon}
                alt="night icon"
                className="toggler-mode__image"
              />
            )
          return (
            <button
              className="toggler-mode"
              onClick={() => {
                const nextTheme = theme === "light" ? "dark" : "light"
                toggleTheme(nextTheme)
              }}
            >
              {handleIcon}
            </button>
          )
        }}
      </ThemeToggler>
    )
  }
}

export default ThemeTogglerPlugin
