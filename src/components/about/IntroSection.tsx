import Reveal from '../ui/Reveal'
import styles from './IntroSection.module.scss'

export default function IntroSection() {
  return (
    <section className={styles.intro}>
      <Reveal as="h1" className={styles.heading}>
        Creativity meets <em>strategy</em>
      </Reveal>

      <div className={styles.body}>
        <div className={styles.left}>
          <Reveal as="p" className={styles.text}>
            Hello, I'm Karla a Graphic Designer and UX/UI Designer with experience creating advertising campaigns for
            restaurants, bars, hospitals, and gyms. I specialize in combining visual creativity with a
            focus on user experience and brand identity. I bring a strong eye
            for detail, composition, and meaningful aesthetics to every project.
          </Reveal>
          <Reveal as="p" className={styles.text}>
            I believe great design lives at the intersection of beauty and function — where
            visual systems meet human behavior. I'm currently focused on building digital
            products that are intuitive, accessible, and visually cohesive.
          </Reveal>
        </div>

        <div className={styles.right}>
          <Reveal as="p" className={styles.text}>
            My process blends research and intuition — I begin by understanding the problem,
            then explore ideas visually until the solution feels inevitable. Whether I'm
            designing an app flow or a packaging system, I treat every project as an opportunity
            to communicate something true.
          </Reveal>
          <Reveal as="p" className={styles.text}>
            Proficient in Adobe Illustrator, Photoshop, InDesign, and Figma, with proven experience
            developing branding assets, technical illustrations, and optimized images for both print
            and digital platforms.
          </Reveal>
        </div>

        <div className={styles.actions}>
          <Reveal as="p" className={styles.languages}>
            English · Spanish
          </Reveal>
          <Reveal as="div">
            <a href="mailto:karla.ort@icloud.com" className={styles.cta}>
              Get in touch →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
