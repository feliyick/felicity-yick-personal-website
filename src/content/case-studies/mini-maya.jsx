import { Embed } from '../../components/case/blocks'

export default {
  slug: 'mini-maya',
  path: '/project/mini-maya',
  title: 'Mini Maya',
  summary:
    '"Mini Maya" is a version of Autodesk Maya with reduced functionality. This program is capable of loading various .obj files, manipulating vertices, faces, and edges. The program utilises half-edge data structures to store and draw mesh data.',
  meta: {
    where: 'CIS460 (Interactive Computer Graphics)',
    role: 'Responsible for all code and classes.',
    tools: ['C++', 'GLSL', 'Photoshop', 'Qt'],
  },
  links: [{ label: 'GitHub', href: 'https://github.com/feliyick/Mini-Maya' }],
  hero: null,
  heroVideo: undefined,
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      body: (
        <>
          <Embed src="https://www.youtube.com/embed/KgivA9He360?si=28Fa726OWfHBjBCB" title="Mini Maya Half-Edge Mesh Operations" />
          <Embed src="https://www.youtube.com/embed/3nIL43VZ7rk?si=X1TbiwxXh7HR6GN3" title="Mini Maya Skeleton and Skinning" />
        </>
      ),
    },
    {
      id: 'features',
      title: 'Features',
      body: (
        <>
          <p>
            Mini Maya supports a handful of primitive mesh operations. Users can select different components via the labelled lists in the application GUI. This includes:
          </p>
          <ul>
            <li>Face Triangulation</li>
            <li>Face Extrusion</li>
            <li>Edge Splitting</li>
            <li>Catmull-Clark Subdivision</li>
            <li>Changing face colour</li>
            <li>Changing vertex position</li>
          </ul>
          <p>
            This project was completed for CIS460 (Interactive Computer Graphics) in the Spring semester of my sophomore year.
          </p>
        </>
      ),
    },
  ],
}
