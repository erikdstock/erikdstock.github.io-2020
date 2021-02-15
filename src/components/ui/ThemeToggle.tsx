import { useEffect, useState } from "react"
import { Box, useColorMode, Button } from "theme-ui"

const colorModes = {
  default: "Light",
  dark: "Dark",
  retro: "Retro",
}

const nextMode = (currentColorMode: string): string => {
  const modes = Object.keys(colorModes)

  // take the first mode after the current one.
  const nextMode = modes.reduce<string | boolean>((prev, current) => {
    if (typeof prev === "string") return prev
    if (prev) return current
    if (current === currentColorMode) return true
    return false
  }, false)
  if (typeof nextMode !== "string") {
    console.warn("you did a bug >:/")
    return "default"
  }
  return nextMode
}

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
        sx={{ bg: "gray", py: 1, px: 2, fontSize: 3, minWidth: 75 }}
        onClick={(_e) => {
          setColorMode(nextMode(colorMode))
        }}
      >
        {colorModes[colorMode]}
      </Button>
    </Box>
  )
}

export default ThemeToggle
