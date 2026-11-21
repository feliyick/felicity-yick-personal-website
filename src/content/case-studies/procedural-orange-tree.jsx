import { Embed } from '../../components/case/blocks'

export default {
  slug: 'procedural-orange-tree',
  path: '/project/procedural-orange-tree',
  title: 'Procedural Orange Tree',
  summary:
    'This is a procedural orange tree generator based on L-systems. I experimented with a variety of different grammar rules to give variety and to mimic the organic shape of orange trees. Users can manipulate the age of the tree, number of iterations, and the number of oranges. The age slider simulates the transition between pink leaves to green leaves with oranges, as seen in nature.',
  meta: {
    role: 'Responsible for all code and .obj files.',
    tools: ['WebGL', 'Typescript', 'L-Systems', 'Autodesk Maya'],
  },
  links: [
    { label: 'GitHub', href: 'https://github.com/feliyick/hw04-l-systems' },
    { label: 'Live demo', href: 'https://feliyick.github.io/hw04-l-systems/' },
  ],
  hero: null,
  heroVideo: undefined,
  sections: [
    {
      id: 'demo',
      title: 'Demo',
      body: (
        <>
          <p>
            Feel free to try out the project{' '}
            <a href="https://feliyick.github.io/hw04-l-systems/" target="_blank" rel="noreferrer">here.</a>
          </p>
          <Embed src="https://www.youtube.com/embed/NfBCGw2VdVs?si=kR0hixpyx2ltizJ2" title="Procedural Orange Tree Demo" />
        </>
      ),
    },
    {
      id: 'gui-and-features',
      title: 'GUI and Features',
      body: (
        <>
          <ul>
            <li> Utilised a custom L System Axiom to generate the main trunk, smaller branches, leaves. The axiom also includes rotation of the leaves.</li>
            <li> Edit the number of iterations of the grammar from a range of 1 to 12. The user can see the tree grow from a little sapling to a full tree.</li>
            <li> The colour of the tree (from more spring time to a Wisteria colour palette). For both the branch and leaf meshes, I lerped betwen two colour palettes.</li>
            <li> The maximum angle at which the branches can rotate.</li>
            <li> I added an FBM sky in the flat shader, coloured with a mixed colour palette. The 'clouds' move along the x and y axis very gradually.</li>
          </ul>
        </>
      ),
    },
  ],
}
