import Klaus from './images/Klaus/Klaus-03.jpg'
import TinyTavern from './images/TinyTavern/TinyTavern01.jpg'
const artProjectInfo = [
    {
        image: `${Klaus}`,
        
        title: 'Klaus',
        // eslint-disable-next-line no-multi-str
        description: 'from Netflix Original "Klaus". Sculpted and textured in ZBrush. \
        Rendered in Arnold and Maya.',
        tags: ['ZBrush', 'Autodesk Maya'],
        page: '/project/klaus'
    }, 
    {
        image: `${TinyTavern}`,
        title: 'Tiny Tavern',
        // eslint-disable-next-line no-multi-str
        description: "Original concept. All assets modelled in Maya and ZBrush,\
         textured in Substance Painter, and rendered in Arnold. Featuring a sculpt of \
        Netflix's Klaus from Klaus.",
        tags: ['Autodesk Maya', 'ZBrush', 'Substance Painter'],
        page: '/project/tiny-tavern'
    }
]



export default artProjectInfo;