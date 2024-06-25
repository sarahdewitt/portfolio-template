import Container from '../atoms/Container'
import CardGrid from '../molecules/CardGrid'

export default function Projects() {
  return (
    <Container id="Projects">
        <h2>Selected Projects</h2>
        {/* To change the project details, please go to: utils/ProjectInfo.ts */}
        <CardGrid/>
    </Container>
  )
}
