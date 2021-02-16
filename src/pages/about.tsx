import { Layout } from "../components/layout/Layout"
import About from "../components/views/About"
import config from "../../blog.config.js"

const AboutPage: React.FC = () => (
  <Layout
    url={config.url + "about"}
    title={config.title + " | About"}
    description={"Learn more about " + config.title}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <About />
  </Layout>
)

export default AboutPage
