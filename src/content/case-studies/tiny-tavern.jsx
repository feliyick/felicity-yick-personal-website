import { Media } from '../../components/case/blocks'
import TinyTavern01 from '../../images/TinyTavern/TinyTavern01.jpg'
import TinyTavern02 from '../../images/TinyTavern/TinyTavern02.jpg'

export default {
  slug: 'tiny-tavern',
  path: '/project/tiny-tavern',
  title: 'Tiny Tavern',
  summary:
    'Environment model of an original concept tiny tavern. Inspired by a plethora of pirate and magic-themed concept art to best evoke a mysterious tavern.',
  meta: {
    role: 'Responsible for all assets and environment design.',
    tools: ['ZBrush', 'Autodesk Maya', 'Substance Painter', 'Arnold'],
  },
  links: [],
  hero: TinyTavern01,
  heroVideo: undefined,
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      body: (
        <>
          <Media src={TinyTavern01} alt="Tiny Tavern render 1" />
          <Media src={TinyTavern02} alt="Tiny Tavern render 2" />
        </>
      ),
    },
  ],
}
