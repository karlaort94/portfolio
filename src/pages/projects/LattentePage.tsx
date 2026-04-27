import ProjectHero from '../../components/project/ProjectHero'
import ProjectBanner from '../../components/project/ProjectBanner'
import ProjectSection from '../../components/project/ProjectSection'
import ImpactSection from '../../components/project/ImpactSection'
import ApplicationsGrid from '../../components/project/ApplicationsGrid'
import NextProject from '../../components/project/NextProject'
import Reveal from '../../components/ui/Reveal'

export default function LattentePage() {
  return (
    <main>
      <ProjectHero
        category="Packaging & Product Redesign"
        title="Lattente"
        subtitle="Evolving an established brand while preserving its identity"
        role="Brand Designer"
        tools="Illustrator · Photoshop"
        year="2023"
      />

      <ProjectBanner
        src="/images/lattente/banner.png"
        alt="Lattente Coffee — takeaway cup in café"
      />

      <ProjectSection label="Overview">
        <Reveal as="p" className="p-overview">
          Lattente Coffee is an established specialty coffee brand with presence in <strong>Argentina and New York</strong>. I was contacted by both branches to redesign key product touchpoints — a summer cold brew bottle for Argentina and takeaway cups for New York. The goal was to refresh the brand while maintaining its recognition and identity in both markets.
        </Reveal>
        <div className="p-tools">
          <p className="p-tools__label">Tools &amp; Technologies</p>
          <div className="p-tools__pills">
            <span className="tool-pill">Illustrator</span>
            <span className="tool-pill">Photoshop</span>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="The Challenge">
        <Reveal as="blockquote" className="p-quote">
          "As an already positioned brand, Lattente needed evolution, not reinvention. Each market had different needs, but both required a cohesive brand direction."
        </Reveal>
        <Reveal as="ul" className="p-list">
          <li>Introduce a fresh and modern look</li>
          <li>Maintain brand recognition</li>
          <li>Adapt the design to different markets</li>
          <li>Create visually strong products for real-world use</li>
        </Reveal>
      </ProjectSection>

      <ProjectSection label="Context" heading="This was not a new brand — it already had" headingEm="it already had">
        <div className="p-two-col">
          <div>
            <Reveal as="ul" className="p-list p-list--plain">
              <li>Established customers</li>
              <li>Existing visual identity</li>
              <li>Market presence in two cities</li>
            </Reveal>
          </div>
          <div>
            <Reveal as="p" className="p-body" style={{ fontStyle: 'italic' }}>
              This meant every design decision needed to respect the brand while pushing it forward.
            </Reveal>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="Design Process">
        <Reveal as="p" className="p-body">The redesign focused on refinement and visual impact:</Reveal>
        <div className="p-two-col">
          <div>
            <p className="p-sublabel">Steps</p>
            <Reveal as="ol" className="p-steps">
              <li><span>Analysis of existing brand assets</span></li>
              <li><span>Exploration of typography and layout variations</span></li>
              <li><span>Development of new visual compositions</span></li>
              <li><span>Adaptation of designs for different formats (bottle &amp; cups)</span></li>
            </Reveal>
          </div>
          <div>
            <p className="p-sublabel">Special Focus</p>
            <Reveal as="ul" className="p-list">
              <li>Readability</li>
              <li>Shelf presence</li>
              <li>Brand consistency</li>
            </Reveal>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="The Solution" heading="A refined visual system" headingEm="visual system">
        <Reveal as="p" className="p-body">
          We developed a refined visual system that adapts to different markets while maintaining a strong and recognizable identity.
        </Reveal>
        <div className="p-two-col" style={{ marginTop: '2.5rem' }}>
          <div>
            <p className="p-sublabel p-sublabel--terracotta">For Argentina</p>
            <Reveal as="p" className="p-body">
              The focus was on creating a bold and contemporary cold brew bottle that stands out in a competitive retail environment. The design uses high contrast, clean typography, and minimal graphic elements. The dark bottle combined with vibrant red type creates a strong shelf presence — modern, energetic, and premium.
            </Reveal>
          </div>
          <div>
            <p className="p-sublabel p-sublabel--terracotta">For New York</p>
            <Reveal as="p" className="p-body">
              The approach shifted toward everyday brand experience through takeaway cups. A more minimal and iconic expression of the brand, using a simplified symbol and balanced composition that feels both modern and approachable — designed to feel natural in real café environments.
            </Reveal>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="Applications" heading="Applications" headingEm="Applications">
        <Reveal as="p" className="p-body">
          The redesigned identity was applied across key physical touchpoints — cold brew bottle (Argentina), hot beverage takeaway cups and cold drink cups (New York). Each application was designed considering real usage scenarios.
        </Reveal>
        <ApplicationsGrid
          variant="gallery-2col"
          images={[
            { src: '/images/lattente/app-01.png', alt: 'Lattente — takeaway cups front and back' },
            { src: '/images/lattente/app-02.png', alt: 'Lattente — cold brew bottle Argentina' },
            { src: '/images/lattente/app-03.png', alt: 'Lattente — hand holding branded cup' },
            { src: '/images/lattente/app-04.png', alt: 'Lattente — branded cold drink cup in café' },
          ]}
        />
      </ProjectSection>

      <ImpactSection
        items={[
          { num: '01', text: 'Stronger visual differentiation in competitive markets' },
          { num: '02', text: 'More cohesive brand presence across international locations' },
          { num: '03', text: 'Elevated perception of the brand as modern and premium' },
        ]}
      />

      <ProjectSection label="Design Impact" heading="What this demonstrates" headingEm="demonstrates">
        <Reveal as="ul" className="p-arrows">
          <li>Strategic thinking for real-world brands</li>
          <li>Adaptation across different markets and audiences</li>
          <li>Balance between consistency and innovation</li>
        </Reveal>
      </ProjectSection>

      <NextProject slug="nescafe" />
    </main>
  )
}
