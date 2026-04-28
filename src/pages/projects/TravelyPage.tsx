import ProjectHero from '../../components/project/ProjectHero'
import ProjectBanner from '../../components/project/ProjectBanner'
import ProjectSection from '../../components/project/ProjectSection'
import ImpactSection from '../../components/project/ImpactSection'
import ScreensGallery from '../../components/project/ScreensGallery'
import NextProject from '../../components/project/NextProject'
import Reveal from '../../components/ui/Reveal'

export default function TravelyPage() {
  return (
    <main>
      <ProjectHero
        category="Group Travel · Planning App"
        title="Travely"
        subtitle="Organizing every part of group travel in one app"
        role="UX/UI Designer"
        tools="Figma · Maze"
        year="2025"
      />

      <ProjectBanner
        src="/images/travely/banner.jpg"
        alt="Travely app mockup banner"
      />

      <ProjectSection label="Overview">
        <Reveal as="p" className="p-overview">
           Travely is a mobile app designed to simplify group travel planning. It lets users to organize itineraries, track shared expenses, and coordinate trips with friends or family in one place.
        </Reveal>
        <div className="p-tools">
          <p className="p-tools__label">Tools &amp; Technologies</p>
          <div className="p-tools__pills">
            <span className="tool-pill">Figma</span>
            <span className="tool-pill">Maze</span>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="The Challenge">
        <Reveal as="blockquote" className="p-quote">
          "Planning trips with multiple people can quickly become chaotic. Users often struggle with tracking shared expenses, coordinating itineraries, managing group decisions, and keeping all trip information in one place."
        </Reveal>
        <Reveal as="ul" className="p-list">
          <li>Tracking shared expenses across the group</li>
          <li>Coordinating itineraries with multiple people</li>
          <li>Managing group decisions and communication</li>
          <li>Keeping all trip information centralized</li>
        </Reveal>
      </ProjectSection>

      <ProjectSection label="Research" heading="Understanding the user" headingEm="the user">
        <div className="p-two-col">
          <div>
            <p className="p-sublabel">Methods</p>
            <Reveal as="ul" className="p-list p-list--plain">
              <li>User interviews about group travel experiences</li>
              <li>Common pain points in trip coordination</li>
              <li>Existing travel and expense apps analysis</li>
              <li>Usability testing with Maze</li>
            </Reveal>
          </div>
          <div>
            <p className="p-sublabel">Key Insights</p>
            <Reveal as="ul" className="p-insights">
              <li>Users rely heavily on multiple apps (notes, chats, spreadsheets)</li>
              <li>Expense tracking is one of the biggest frustrations</li>
              <li>Users want a centralized and visual way to organize trips</li>
            </Reveal>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="Design Process">
        <div className="p-two-col">
          <div>
            <p className="p-sublabel">Steps</p>
            <Reveal as="ol" className="p-steps">
              <li><span>Defined user flows for planning, expenses, and itinerary</span></li>
              <li><span>Created wireframes to structure key features</span></li>
              <li><span>Designed high-fidelity UI in Figma</span></li>
              <li><span>Built a consistent design system</span></li>
            </Reveal>
          </div>
          <div>
            <p className="p-sublabel">Special Focus</p>
            <Reveal as="ul" className="p-list">
              <li>Clear navigation</li>
              <li>Easy interaction between users</li>
              <li>Visual clarity for shared information</li>
            </Reveal>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection label="The Solution" heading="A centralized experience" headingEm="experience">
        <Reveal as="p" className="p-body">
          Travely offers a centralized platform where users can create and manage trip itineraries, track shared expenses in real time, collaborate with friends or family, and keep all travel details organized in one place. Its interface features a clean, modern design supported by subtle travel-inspired visuals. 
        </Reveal>
        <Reveal as="ul" className="p-list">
          <li>Create and manage trip itineraries</li>
          <li>Track shared expenses in real time</li>
          <li>Invite and collaborate with friends</li>
          <li>Organize travel details in one place</li>
          <li>Chat integration for coordination</li>
        </Reveal>
      </ProjectSection>

      <ProjectSection label="Visual Showcase" showcase>
        <ScreensGallery
          heading="Visual Showcase"
          headingEm="Showcase"
          prototypeUrl="https://www.figma.com/proto/V4nGXga22XcqcVeNgUj9af/Travely?page-id=895%3A6409&node-id=895-7899&p=f&viewport=333%2C227%2C0.05&t=QPV0alcsGjv3qcyY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=895%3A7881"
          screens={[
            { src: '/images/travely/screen-00.png', alt: 'Travely — Splash screen' },
            { src: '/images/travely/screen-02.png', alt: 'Travely — Login screen' },
            { src: '/images/travely/screen-01.png', alt: 'Travely — Home screen' },
            { src: '/images/travely/screen-05.png', alt: 'Travely — Itinerary' },
            { src: '/images/travely/screen-06.png', alt: 'Travely — Expenses' },
            { src: '/images/travely/screen-04.png', alt: 'Travely — Profile' },
            { src: '/images/travely/screen-03.png', alt: 'Travely — Travel history' },
          ]}
        />
      </ProjectSection>

      <ImpactSection
        items={[
          { num: '01', text: 'Simplified group trip organization' },
          { num: '02', text: 'Reduced confusion around shared expenses' },
          { num: '03', text: 'Improved overall user experience through clear structure and flow' },
        ]}
      />

      <ProjectSection label="Design Impact" heading="What this demonstrates" headingEm="demonstrates">
        <Reveal as="ul" className="p-arrows">
          <li>Design collaborative digital products for real-world scenarios</li>
          <li>Solve complex multi-user problems with clear information architecture</li>
          <li>Create intuitive systems for complex group interactions</li>
        </Reveal>
      </ProjectSection>

      <NextProject slug="drguzman" />
    </main>
  )
}
