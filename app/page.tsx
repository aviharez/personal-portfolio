import ChapterRail from '@/components/ChapterRail'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Work from '@/components/Work'
import Expertise from '@/components/Expertise'
import Timeline from '@/components/Timeline'
import Glance from '@/components/Glance'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <ChapterRail />
      <main>
        <Hero />
        <Story />
        <Work />
        <Expertise />
        <Timeline />
        <Glance />
        <Contact />
      </main>
    </>
  )
}
