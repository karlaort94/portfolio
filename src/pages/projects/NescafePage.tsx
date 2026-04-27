import ProjectHero from '../../components/project/ProjectHero'
import ProjectBanner from '../../components/project/ProjectBanner'
import ProjectSection from '../../components/project/ProjectSection'
import ImpactSection from '../../components/project/ImpactSection'
import ScreensGallery from '../../components/project/ScreensGallery'
import NextProject from '../../components/project/NextProject'
import Reveal from '../../components/ui/Reveal'

export default function NescafePage() {
  return (
    <main>
      <ProjectHero
        category="Brand Case Study"
        title="NESCAFÉ Connect"
        subtitle="Reimagining the digital experience for coffee lovers"
        role="UX/UI Designer"
        tools="Figma · Illustrator · Photoshop"
        year="2025"
      />

      <ProjectBanner
        src="/images/nescafe/banner.jpg"
        alt="NESCAFÉ Connect app mockup banner"
      />

      <ProjectSection label="Overview">
        <Reveal as="p" className="p-overview">
          NESCAFÉ Connect is a mobile app designed to help users discover and subscribe to coffee products based on their personal taste, brewing preferences, and lifestyle. The goal was to create a seamless and engaging experience that transforms how users explore coffee, moving from generic selection to a fully personalized journey.
        </Reveal>
        <div className="p-tools">
          <p className="p-tools__label">Tools &amp; Technologies</p>
          <div className="p-tools__pills">
            <span className="tool-pill">Figma</span>
            <span className="tool-pill">Illustrator</span>
            <span className="tool-pill">Photoshop</span>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="The Challenge">
        <Reveal as="blockquote" className="p-quote">
          "Coffee consumption is highly personal, yet most platforms offer generic product recommendations. Users often feel overwhelmed when choosing coffee."
        </Reveal>
        <Reveal as="ul" className="p-list">
          <li>Lack of personalized suggestions</li>
          <li>Confusing product categories</li>
          <li>Limited guidance based on taste preferences</li>
        </Reveal>
      </ProjectSection>

      <ProjectSection label="Research" heading="Understanding the user" headingEm="the user">
        <div className="p-two-col">
          <div>
            <p className="p-sublabel">Methods</p>
            <Reveal as="ul" className="p-list p-list--plain">
              <li>AEIOU observations</li>
              <li>Empathy mapping</li>
              <li>User personas</li>
              <li>Journey mapping</li>
            </Reveal>
          </div>
          <div>
            <p className="p-sublabel">Key Insights</p>
            <Reveal as="ul" className="p-insights">
              <li>Users want quick and simple recommendations</li>
              <li>They value visual guidance over technical descriptions</li>
              <li>Discovery should feel interactive and engaging, not overwhelming</li>
            </Reveal>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="Design Process">
        <div className="p-two-col">
          <div>
            <p className="p-sublabel">Steps</p>
            <Reveal as="ol" className="p-steps">
              <li><span>Defined user flows and key interactions</span></li>
              <li><span>Created low-fidelity wireframes</span></li>
              <li><span>Developed high-fidelity prototypes in Figma</span></li>
              <li><span>Designed a visual system aligned with NESCAFÉ branding</span></li>
            </Reveal>
          </div>
          <div>
            <p className="p-sublabel">Special Focus</p>
            <Reveal as="ul" className="p-list">
              <li>Content hierarchy</li>
              <li>Microinteractions</li>
              <li>Emotional engagement</li>
            </Reveal>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="The Solution" heading="A personalized experience" headingEm="experience">
        <Reveal as="p" className="p-body">
          The final solution is a personalized coffee experience that uses a warm and dynamic visual language inspired by coffee intensity, speed, sustainability, and gourmet categories.
        </Reveal>
        <Reveal as="ul" className="p-list">
          <li>Onboarding based on taste preferences</li>
          <li>Interactive coffee catalog</li>
          <li>Recommendation system based on flavor profiles</li>
          <li>User profile and subscription tracking</li>
          <li>Community features and challenges</li>
        </Reveal>
      </ProjectSection>

      <ProjectSection label="Visual Showcase" showcase>
        <ScreensGallery
          heading="Visual Showcase"
          headingEm="Showcase"
          prototypeUrl="https://www.figma.com/proto/u28I2W0l9QOGkqUtaIURNy/Nescafe?page-id=314%3A2814&node-id=314-2860&p=f&viewport=140%2C342%2C0.06&t=6WCgq9j5Gf7iP2Sd-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=314%3A2950"
          screens={[
            { src: '/images/nescafe/screen-00.jpg', alt: 'NESCAFÉ Connect — Splash screen' },
            { src: '/images/nescafe/screen-01.jpg', alt: 'NESCAFÉ Connect — Login screen' },
            { src: '/images/nescafe/screen-02.jpg', alt: 'NESCAFÉ Connect — Home screen' },
            { src: '/images/nescafe/screen-03.jpg', alt: 'NESCAFÉ Connect — Catalog' },
            { src: '/images/nescafe/screen-04.jpg', alt: 'NESCAFÉ Connect — Prensa Francesa' },
            { src: '/images/nescafe/screen-05.jpg', alt: 'NESCAFÉ Connect — Subscriptions' },
          ]}
        />
      </ProjectSection>

      <ImpactSection
        items={[
          { num: '01', text: 'Improved clarity in user navigation' },
          { num: '02', text: 'More intuitive product discovery experience' },
          { num: '03', text: 'Stronger emotional connection with the brand through personalization' },
        ]}
      />

      <ProjectSection label="Design Impact" heading="What this demonstrates" headingEm="demonstrates">
        <Reveal as="ul" className="p-arrows">
          <li>Translate complex user needs into intuitive experiences</li>
          <li>Build complete digital products from research to prototype</li>
          <li>Design scalable systems aligned with brand identity</li>
        </Reveal>
      </ProjectSection>

      <NextProject slug="travely" />
    </main>
  )
}
