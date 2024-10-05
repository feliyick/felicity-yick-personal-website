import Friendly from './images/friendly.png'
import Treble from './images/treble.png'

const artProjectInfo = [
    {
        image: `${Friendly}`,
        title: 'friendly',
        // eslint-disable-next-line no-multi-str
        description: 'A social media webapp with chat, live stream, user OAuth, and \
        other capabilities! A three-person team project. Responsible for Livestreaming, UI/UX, User OAuth',
        tags: ['ReactJs', 'HTML', 'CSS', 'MongoDB', 'Fullstack', 'Figma', 'Twilio'],
        page: 'https://cis557-friendly.herokuapp.com/'
    },
    {
        image: `${Treble}`,
        title: 'treble',
        // eslint-disable-next-line no-multi-str
        description: "This webapp will analyze Spotify songs, song lyrics, artists, and Grammy awards.\
        Users are able to search for particular songs, lyrics, artists, albums, as well as filter through\
        Grammy Award data by year and category. Featuring a song and artist recomendation system.\
        A four-person team project. Responsible for UI/UX, Grammy Award functionality, Search and results functionality.",
        tags: ['ReactJs', 'HTML', 'CSS', 'AWS', 'Fullstack', 'Figma', 'MySQL'],
        page: '/project/treble'
    },
    // {
    //     image: `${Blinn}`,
    //     title: 'Shader Fun',
    //     // eslint-disable-next-line no-multi-str
    //     description: 'Implementation of a variety of different\
    //     shaders. Including: Blinn-Phong, Mattecap, Gaussian Blur,\
    //     Worley Noise, ...',
    //     tags: ['GLSL', 'C++'],
    //     page: '/project/tiny-tavern'
    // },
    
]



export default artProjectInfo;