import { Embed } from '../../components/case/blocks'
import ThesisPDF from '../../pdfs/SeniorDesignDocument_FelicityYick.pdf'

export default {
  slug: 'procedural-terrariums',
  path: '/project/procedural-terrariums',
  title: 'Procedural Terrariums',
  summary:
    'For my Senior Thesis, I built a set of Houdini Digital Assets to procedurally create a wide variety of succulents and decor, and spawn in an enclosed terrarium.',
  meta: {
    where: 'Senior Thesis',
    role: 'Responsible for all code and classes.',
    tools: ['Houdini', 'Substance Painter'],
  },
  links: [
    { label: 'GitHub', href: 'https://github.com/feliyick/hw04-l-systems?organization=feliyick&organization=feliyick' },
    { label: 'Thesis (PDF)', href: ThesisPDF },
  ],
  hero: null,
  heroVideo: undefined,
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      body: (
        <>
          <p>
            Get to know the project by watching this (hopefully not cringey) final presentation! Or if you are a reader, check out my final thesis{' '}
            <a href={ThesisPDF} target="_blank" rel="noreferrer">here.</a>
          </p>
          <Embed
            src="https://www.youtube.com/embed/dHzb96EucTk?si=IFu8OJxhhT92-5Rj?autoplay=1&mute=1"
            title="Procedural Terrariums Presentation"
          />
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
            <li>HDAs with customisable parameters for a succulent varieties: Button Ferns, Fittonia, Aeonium Lily Pad, Kiwi Rare</li>
            <li>Ability for users to choose their terrarium shape, as well as the terrain heights of soil and water levels</li>
            <li>Polished interface that allows users to paint and place instanced plants within the interior of their terrarium along soil surfacesg</li>
            <li>An alternative generation method: A simple ‘Generate’ button that gives random variations of terrariums</li>
            <li>A connected pipeline to Autodesk Maya/UnReal Engine 4 for efficient texturing using materials made in Substance Designer, and real time rendering</li>
          </ul>
          <p>Below is a sped up demo of the generator tool in action, showcasing how to quickly generate terrariums with randomized features.</p>
          <Embed src="https://www.youtube.com/embed/fHJIVween4s?si=cRaOhsdebWm217Qx" title="Terrarium Generator Demo" />
          <p>Below is a demonstration of painting areas of the terrarium soil to spawn instanced plants.</p>
          <p>Using Houdini paint nodes, the tool is configure so that users can paint on the soil terrain to define a density distribution map for each plant type. These maps would be greyscale. White would be additive, and black would be subtractive. The maps can be converted into a mesh of points where plants can be scattered. This user painting method would not implement any of the systematic ecosystem relationships. Placement of plants would be up to the user’s artistic direction.</p>
          <Embed
            src="https://www.youtube.com/embed/HkwyvEdVu-U?si=3dLPG5UIsnIeLoAF?autoplay=1&mute=1"
            title="Terrarium Paint Tool Demo"
          />
          <p>An example of the parameterised settings of the Button Fern HDA. Users can adjust: </p>
          <ul>
            <li>Length, width, and taper of the individual leaves</li>
            <li>The angle at which the stipes collectively bends downwards due to gravity</li>
            <li>How much each pinna fans out and inwards towards the apex of the leaf</li>
            <li>Length, width, and bend of the stem</li>
          </ul>
          <Embed src="https://www.youtube.com/embed/PZOc5mBlcqc?si=upOV5mnASHppP8Yc" title="Button Fern HDA Parameters" />
        </>
      ),
    },
  ],
}
