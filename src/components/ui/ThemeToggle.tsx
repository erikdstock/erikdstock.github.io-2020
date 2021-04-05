import { useEffect, useState } from "react"
import { Box, useColorMode, Button } from "theme-ui"

const colorModes = {
  light: "Light",
  dark: "Dark",
  retro: "Retro",
}

const nextMode = (currentMode: string): string => {
  const modes = Object.keys(colorModes)

  // Iterate through the keys defined in `colorModes`
  const nextMode = modes.reduce<string | boolean>((prev, current) => {
    if (typeof prev === "string") return prev
    if (prev) return current
    if (current === currentMode) return true
    return false
  }, false)
  if (typeof nextMode !== "string") {
    console.warn("you did a bug >:|")
    // console.warn(currentMode + " not found in " + JSON.stringify(colorModes))
    return "light"
  }
  return nextMode
}

const currentName = (colorMode: string) =>
  colorModes[colorMode] || Object.entries(colorModes)[0][1]

const ThemeToggle: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode()
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    // fade in animation
    setOpacity(1)
  }, [])

  return (
    <Box
      sx={{
        p: 3,
        position: "absolute",
        top: 0,
        right: 0,
        opacity,
        transition: "opacity .25s ease-in-out",
      }}
    >
      <Button
        variant="outline"
        sx={{ px: 2, fontSize: 3, minWidth: 75 }}
        onClick={(_e) => {
          setColorMode(nextMode(colorMode))
        }}
      >
        {currentName(colorMode)}
      </Button>
    </Box>
  )
}

export default ThemeToggle
