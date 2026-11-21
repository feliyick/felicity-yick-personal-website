import { Embed } from '../../components/case/blocks'

export default {
  slug: 'treble',
  path: '/project/treble',
  title: 'treble',
  summary:
    'This webapp will analyze Spotify songs, song lyrics, artists, and Grammy awards. Users are able to search for particular songs, lyrics, artists, albums, as well as filter through Grammy Award data by year and category. Featuring a song and artist recomendation system. A four-person team project. The database has since been terminated.',
  meta: {
    role: 'Responsible for Figma UI/UX, Search functionality and Results, Grammy Awards. Incollaboration with Amy Shen, Bryan Nguyen, Andrew Song.',
    tools: ['ReactJs', 'HTML/CSS', 'Fullstack', 'MySQL', 'Figma'],
  },
  links: [{ label: 'GitHub', href: 'https://github.com/amyshennn/CIS450-Project' }],
  hero: null,
  heroVideo: undefined,
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      body: (
        <>
          <Embed src="https://drive.google.com/file/d/1hgVzRPwRKl6K4gKwfRWAHKlZjRhP5V3q/preview" title="Treble Demo Video" />
        </>
      ),
    },
    {
      id: 'figma-ui-ux',
      title: 'Figma UI/UX',
      body: (
        <>
          <Embed
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQ4lWNLF7X9c0xCrQyIoK2z%2FMusic-Web-App%3Fnode-id%3D0%253A1"
            title="Treble Figma Design"
          />
        </>
      ),
    },
  ],
}
