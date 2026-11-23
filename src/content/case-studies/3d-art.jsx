import { Gallery, Embed, Media } from '../../components/case/blocks'
import TinyTavern01 from '../../images/TinyTavern/TinyTavern01.jpg'
import TinyTavern02 from '../../images/TinyTavern/TinyTavern02.jpg'
import Klaus01 from '../../images/Klaus/Klaus-01.jpg'
import Klaus02 from '../../images/Klaus/Klaus-02.jpg'
import Klaus03 from '../../images/Klaus/Klaus-03.jpg'
import Klaus04 from '../../images/Klaus/Klaus-04.jpg'

export default {
  slug: '3d-art',
  path: '/project/3d-art',
  title: 'Tiny Tavern & Klaus',
  summary:
    'Two hand-made 3D art pieces: an original tiny tavern environment, and a sculpt of Klaus, my first sculpt ever.',
  meta: {
    role: 'Responsible for all modelling, sculpting, texturing and rendering. Credit to Netflix Animation for the Klaus character design.',
    tools: ['ZBrush', 'Autodesk Maya', 'Substance Painter', 'Arnold'],
  },
  links: [{ label: "'Klaus' (film)", href: 'https://en.wikipedia.org/wiki/Klaus_(film)' }],
  hero: TinyTavern01,
  heroVideo: undefined,
  sections: [
    {
      id: 'tiny-tavern',
      title: 'Tiny Tavern',
      body: (
        <>
          <p>
            Environment model of an original concept tiny tavern. Inspired by a plethora of pirate and magic-themed
            concept art to best evoke a mysterious tavern. All assets modelled in Maya and ZBrush, textured in Substance
            Painter and rendered in Arnold.
          </p>
          <Media src={TinyTavern02} alt="Tiny Tavern render 2" />
        </>
      ),
    },
    {
      id: 'klaus',
      title: 'Klaus',
      body: (
        <>
          <p>
            A ZBrush sculpt of Klaus from 'Klaus'! Loved this movie :) This was my first sculpt ever; I was really excited
            to learn the software. Sculpted initially in T-pose, then used the rigging tool to pose. Rendered in Arnold and
            Maya.
          </p>
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
