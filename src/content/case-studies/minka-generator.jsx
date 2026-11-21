import { Media, Gallery } from '../../components/case/blocks'
import MinkaRender1 from '../../images/Minka/MinkaRender1.jpg'
import MinkaRender2 from '../../images/Minka/MinkaRender2.jpg'
import MinkaParams from '../../images/Minka/MinkaParams.png'
import MinkaTwoStory from '../../images/Minka/MinkaTwoStory.png'
import MinkaCourtyard from '../../images/Minka/MinkaCourtyard.png'

export default {
  slug: 'minka-generator',
  path: '/project/minka-generator',
  title: 'Procedural Minkas',
  summary:
    'As part of my final project for my Procedural Graphics class, I built a set of Houdini Digital Asset to procedurally create Japanese Minkas. My traditional Japanese house generator is capable of creating 1-2 story high houses, with an optional courtyard (which sacrifices the second floor).',
  meta: {
    where: 'Procedural Graphics class',
    role: 'Responsible for all code and classes.',
    tools: ['Houdini'],
  },
  links: [{ label: 'GitHub', href: 'https://github.com/feliyick/final-project' }],
  hero: MinkaRender1,
  heroVideo: undefined,
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      body: (
        <>
          <p>
            For more detailed information about this project, take a look at my detailed ReadMe in my project repository{' '}
            <a href="https://github.com/feliyick/final-project" target="_blank" rel="noreferrer">here.</a>
          </p>
          <Media src={MinkaRender1} alt="Minka Render 1" />
          <Gallery
            items={[
              { src: MinkaTwoStory, alt: 'Two-story Minka' },
              { src: MinkaCourtyard, alt: 'Minka with courtyard' },
            ]}
            cols={2}
          />
          <Media src={MinkaRender2} alt="Minka Render 2" />
        </>
      ),
    },
    {
      id: 'features',
      title: 'Features',
      body: (
        <>
          <p>
            These Houdini Digital Assets provides a parameterised solution for quickly generating fully textured terrariums. Features include
          </p>
          <ul>
            <li>House base shape, base height, number of wall extrusions</li>
            <li>Size of courtyard in the center(can be 0 for no courtyard)</li>
            <li>Number of doors, windows, stairs</li>
            <li>Railing, platform depth and height</li>
            <li>Colours of all elements</li>
          </ul>
          <Media src={MinkaParams} alt="Minka HDA parameters" />
        </>
      ),
    },
  ],
}
