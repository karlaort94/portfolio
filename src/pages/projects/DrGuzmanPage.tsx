import ProjectHero from '../../components/project/ProjectHero'
import ProjectBanner from '../../components/project/ProjectBanner'
import ProjectSection from '../../components/project/ProjectSection'
import ImpactSection from '../../components/project/ImpactSection'
import ApplicationsGrid from '../../components/project/ApplicationsGrid'
import NextProject from '../../components/project/NextProject'
import Reveal from '../../components/ui/Reveal'

export default function DrGuzmanPage() {
  return (
    <main>
      <ProjectHero
        category="Healthcare · Branding"
        title="Dr. Guzmán"
        subtitle="A trustworthy digital presence for modern healthcare"
        role="Brand & UI Designer"
        tools="Illustrator · Photoshop"
        year="2020"
      />

      <ProjectBanner
        src="/images/drguzman/banner.png"
        alt="Dr. Guzmán — Unidad Medica branding banner"
      />

      <ProjectSection label="Overview">
        <Reveal as="p" className="p-overview">
          Dr. Guzmán is a medical clinic branding project focused on creating a clean, trustworthy,
          and modern visual identity. The goal was to design a brand that communicates professionalism
          and care, while also feeling approachable and human-centered for patients.
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
          "Many medical brands tend to feel cold, overly clinical, and impersonal. The challenge was to create a visual identity that felt different."
        </Reveal>
        <Reveal as="ul" className="p-list">
          <li>Builds trust instantly</li>
          <li>Feels professional but not intimidating</li>
          <li>Reflects care, precision, and empathy</li>
          <li>Works across both physical and digital touchpoints</li>
        </Reveal>
      </ProjectSection>

      <ProjectSection label="Research" heading="Understanding the user" headingEm="the user">
        <Reveal as="p" className="p-body">To define the direction, I explored:</Reveal>
        <div className="p-two-col">
          <div>
            <p className="p-sublabel">Methods</p>
            <Reveal as="ul" className="p-list p-list--plain">
              <li>Healthcare branding trends</li>
              <li>Patient perception of medical environments</li>
              <li>Competitor visual identities</li>
            </Reveal>
          </div>
          <div>
            <p className="p-sublabel">Key Insights</p>
            <Reveal as="ul" className="p-insights">
              <li>Blue tones are associated with trust and calmness</li>
              <li>Clean typography improves readability and credibility</li>
              <li>Simplicity enhances professionalism</li>
            </Reveal>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="Design Process">
        <Reveal as="p" className="p-body">The design process focused on clarity and balance:</Reveal>
        <div className="p-two-col">
          <div>
            <p className="p-sublabel">Steps</p>
            <Reveal as="ol" className="p-steps">
              <li><span>Logo exploration and symbol development</span></li>
              <li><span>Color palette definition based on trust and calmness</span></li>
              <li><span>Typography selection for readability and professionalism</span></li>
              <li><span>Brand applications across stationery and digital formats</span></li>
            </Reveal>
          </div>
          <div>
            <p className="p-sublabel">Goal</p>
            <Reveal as="p" className="p-body" style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
              The goal was to create a cohesive and flexible brand system that could grow with the clinic.
            </Reveal>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="The Solution" heading="A trustworthy identity" headingEm="trustworthy">
        <Reveal as="p" className="p-body">The final identity combines:</Reveal>
        <Reveal as="ul" className="p-list">
          <li>A soft and modern symbol representing care and connection</li>
          <li>A blue gradient palette to evoke trust and calmness</li>
          <li>Clean and legible typography</li>
        </Reveal>
        <Reveal as="p" className="p-body" style={{ fontStyle: 'italic', marginTop: '2rem' }}>
          The result is a brand that feels both professional and approachable, helping create a positive experience for patients.
        </Reveal>
      </ProjectSection>

      <ProjectSection label="Applications">
        <ApplicationsGrid
          variant="single"
          heading="Applications"
          bodyText="The brand was applied across:"
          bullets={[
            'Stationery (business cards, letterhead, envelopes)',
            'Digital assets',
            'Clinic signage',
          ]}
          images={[{ src: '/images/drguzman/applications.png', alt: 'Dr. Guzmán brand applications' }]}
        />
      </ProjectSection>

      <ImpactSection
        items={[
          { num: '01', text: 'Strong and recognizable brand identity' },
          { num: '02', text: 'Consistent application across multiple touchpoints' },
          { num: '03', text: 'Improved perception of professionalism and trust' },
        ]}
      />

      <ProjectSection label="Design Impact" heading="What this demonstrates" headingEm="demonstrates">
        <Reveal as="ul" className="p-arrows">
          <li>Create strategic brand identities for specialized industries</li>
          <li>Translate abstract values (trust, care) into visual systems</li>
          <li>Design for real-world applications across physical and digital formats</li>
        </Reveal>
      </ProjectSection>

      <NextProject slug="littledarling" />
    </main>
  )
}
