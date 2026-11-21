import { Gallery, Embed } from '../../components/case/blocks'
import Klaus01 from '../../images/Klaus/Klaus-01.jpg'
import Klaus02 from '../../images/Klaus/Klaus-02.jpg'
import Klaus03 from '../../images/Klaus/Klaus-03.jpg'
import Klaus04 from '../../images/Klaus/Klaus-04.jpg'

export default {
  slug: 'klaus',
  path: '/project/klaus',
  title: 'Klaus',
  summary:
    "A ZBrush sculpt of Klaus from 'Klaus'! Loved this movie :) This was my first sculpt ever; Was really excited to learn about the software. Sculpted initially in T-Pose, then used the rigging tool to pose.",
  meta: {
    role: 'Responsible for the whole sculpt. Credit to Netflix Animation for the character design.',
    tools: ['ZBrush', 'Autodesk Maya', 'Arnold'],
  },
  links: [{ label: "'Klaus' (film)", href: 'https://en.wikipedia.org/wiki/Klaus_(film)' }],
  hero: Klaus01,
  heroVideo: undefined,
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      body: (
        <>
          <Embed src="https://www.youtube.com/embed/WOw49N6Rfek?si=4tZqi7TP1hz1vCbL" title="Klaus ZBrush Sculpt" />
          <Gallery
            items={[
              { src: Klaus01, alt: 'Klaus sculpt render 1' },
              { src: Klaus02, alt: 'Klaus sculpt render 2' },
              { src: Klaus03, alt: 'Klaus sculpt render 3' },
              { src: Klaus04, alt: 'Klaus sculpt render 4' },
            ]}
            cols={2}
          />
        </>
      ),
    },
  ],
}
