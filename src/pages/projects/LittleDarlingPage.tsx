import ProjectHero from '../../components/project/ProjectHero'
import ProjectBanner from '../../components/project/ProjectBanner'
import ProjectSection from '../../components/project/ProjectSection'
import ImpactSection from '../../components/project/ImpactSection'
import ApplicationsGrid from '../../components/project/ApplicationsGrid'
import NextProject from '../../components/project/NextProject'
import Reveal from '../../components/ui/Reveal'

export default function LittleDarlingPage() {
  return (
    <main>
      <ProjectHero
        category="Brand Identity · Packaging"
        title="Little Darling Coffee"
        subtitle="Emotion-Driven coffee brand identity"
        role="Brand Designer"
        tools="Illustrator · Photoshop"
        year="2024"
      />

      <ProjectBanner
        src="/images/littledarling/banner.png"
        alt="Little Darling Coffee — packaging mockup banner"
        objectPosition="center 85%"
      />

      <ProjectSection label="Overview">
        <Reveal as="p" className="p-overview">
          Little Darling Coffee is a brand identity project focused on creating a warm, intimate, and emotionally driven coffee experience. The goal was to design a brand that feels personal and inviting, transforming everyday coffee moments into something meaningful and memorable.
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
          "Many coffee brands focus on being modern or minimalist, but often lack emotional connection. The challenge was to create a brand that felt genuinely different."
        </Reveal>
        <Reveal as="ul" className="p-list">
          <li>Feels warm, human, and personal</li>
          <li>Stands out without relying on trends</li>
          <li>Creates an emotional connection with users</li>
          <li>Translates beautifully into real-life applications</li>
        </Reveal>
      </ProjectSection>

      <ProjectSection label="Research" heading="Understanding the user" headingEm="the user">
        <Reveal as="p" className="p-body">To define the direction, I explored:</Reveal>
        <div className="p-two-col">
          <div>
            <p className="p-sublabel">Methods</p>
            <Reveal as="ul" className="p-list p-list--plain">
              <li>Emotional branding in coffee culture</li>
              <li>Café aesthetics and customer experience</li>
              <li>Typography styles that feel personal and expressive</li>
            </Reveal>
          </div>
          <div>
            <p className="p-sublabel">Key Insights</p>
            <Reveal as="ul" className="p-insights">
              <li>Script typography creates intimacy and personality</li>
              <li>Warm tones enhance emotional connection</li>
              <li>Small details elevate perceived brand value</li>
            </Reveal>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="Design Process">
        <Reveal as="p" className="p-body">The design process focused on storytelling and emotion:</Reveal>
        <div className="p-two-col">
          <div>
            <p className="p-sublabel">Steps</p>
            <Reveal as="ol" className="p-steps">
              <li><span>Exploration of handwritten-style typography</span></li>
              <li><span>Development of a soft, warm color palette</span></li>
              <li><span>Creation of a visual identity centered on comfort and simplicity</span></li>
              <li><span>Application across packaging and café elements</span></li>
            </Reveal>
          </div>
          <div>
            <p className="p-sublabel">Goal</p>
            <Reveal as="p" className="p-body" style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
              The goal was to create a brand that feels crafted, not manufactured.
            </Reveal>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="The Solution" heading="A personalized experience" headingEm="experience">
        <Reveal as="p" className="p-body">The final identity combines:</Reveal>
        <Reveal as="ul" className="p-list">
          <li>Elegant handwritten typography that feels personal and expressive</li>
          <li>Warm neutral tones inspired by coffee and natural textures</li>
          <li>A minimal yet emotional visual language</li>
        </Reveal>
        <Reveal as="p" className="p-body" style={{ fontStyle: 'italic', marginTop: '2rem' }}>
          The result is a brand that feels intimate, cozy, and authentic.
        </Reveal>
      </ProjectSection>

      <ProjectSection label="Applications" heading="Applications" headingEm="Applications">
        <Reveal as="p" className="p-body">
          The brand was applied across coffee packaging, cups and takeaway materials, and in-store visuals. Each application reinforces the emotional experience of the brand.
        </Reveal>
        <ApplicationsGrid
          variant="gallery"
          images={[
            { src: '/images/littledarling/app-03.jpg', alt: 'Little Darling Coffee — branded napkin with pastries' },
            { src: '/images/littledarling/app-02.jpg', alt: 'Little Darling Coffee — barista pouring latte' },
            { src: '/images/littledarling/app-01.jpg', alt: 'Little Darling Coffee — branded mug on table' },
          ]}
        />
      </ProjectSection>

      <ImpactSection
        items={[
          { num: '01', text: 'Strong emotional connection through design' },
          { num: '02', text: 'Cohesive and recognizable brand identity' },
          { num: '03', text: 'Elevated perception of warmth and authenticity' },
        ]}
      />

      <ProjectSection label="Design Impact" heading="What this demonstrates" headingEm="demonstrates">
        <Reveal as="ul" className="p-arrows">
          <li>Create emotionally driven brand identities</li>
          <li>Balance aesthetics with storytelling</li>
          <li>Design brands that connect beyond functionality</li>
        </Reveal>
      </ProjectSection>

      <NextProject slug="lattente" />
    </main>
  )
}
