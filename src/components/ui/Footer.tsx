import { Box, Text } from "theme-ui"
import { Link } from "components/ui/Link"

const Footer: React.FC = () => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Created by{" "}
      <Link external href="https://github.com/erikdstock">
        Erik Stockmeier
      </Link>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Source available on{" "}
      <a href="https://github.com/erikdstock/erik-online">Github</a>
    </Text>
  </Box>
)

export default Footer
