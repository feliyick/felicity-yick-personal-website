import { Media, Gallery, Switcher, Placeholder, Legend } from '../../components/case/blocks'
import GoldenWide from '../../images/SFVictorian/golden_cam_wide.jpg'
import Reference1 from '../../images/SFVictorian/reference_1.jpg'
import Reference2 from '../../images/SFVictorian/reference_2.jpg'
import Reference3 from '../../images/SFVictorian/reference_3.jpg'
import Reference4 from '../../images/SFVictorian/reference_4.jpg'
import OrnamentStyles from '../../images/SFVictorian/ornament_styles.png'
import BracketScroll from '../../images/SFVictorian/bracket_scroll.jpg'
import BracketConsole from '../../images/SFVictorian/bracket_console.jpg'
import BracketBlock from '../../images/SFVictorian/bracket_block.jpg'
import BracketQuarterSweep from '../../images/SFVictorian/bracket_quarter_sweep.jpg'
import Palettes from '../../images/SFVictorian/palettes.png'
import GoldenAerial from '../../images/SFVictorian/golden_cam_aerial.jpg'
import GoldenRowDown from '../../images/SFVictorian/golden_cam_row_down.jpg'
import GoldenFront from '../../images/SFVictorian/golden_cam_front.jpg'
import SunnyFront from '../../images/SFVictorian/sunny_cam_front.jpg'
import NightFront from '../../images/SFVictorian/night_cam_front.jpg'
import NightWide from '../../images/SFVictorian/night_cam_wide.jpg'
import NightRowUp from '../../images/SFVictorian/night_cam_row_up.jpg'
import SunnyStreet from '../../images/SFVictorian/sunny_cam_street.jpg'
import SunnyTele from '../../images/SFVictorian/sunny_cam_tele.jpg'
import Seed022 from '../../images/SFVictorian/gallery_seed_022.jpg'
import Seed151 from '../../images/SFVictorian/gallery_seed_151.jpg'
import Seed202 from '../../images/SFVictorian/gallery_seed_202.jpg'
import Seed222 from '../../images/SFVictorian/gallery_seed_222.jpg'
import Seed290 from '../../images/SFVictorian/gallery_seed_290.jpg'
import Seed354 from '../../images/SFVictorian/gallery_seed_354.jpg'
import Seed468 from '../../images/SFVictorian/gallery_seed_468.jpg'
import Seed480 from '../../images/SFVictorian/gallery_seed_480.jpg'
import Seed500 from '../../images/SFVictorian/gallery_seed_500.jpg'
import ParamsHouse from '../../images/SFVictorian/params_house.png'
import ParamsBays from '../../images/SFVictorian/params_bays.png'
import ParamsRoof from '../../images/SFVictorian/params_roof.png'
import ParamsPaint from '../../images/SFVictorian/params_paint.png'
import ParamsOrnament from '../../images/SFVictorian/params_ornament.png'
import ParamsSize from '../../images/SFVictorian/params_size.png'
import ParamsEntry from '../../images/SFVictorian/params_entry.png'
import ParamsWindows from '../../images/SFVictorian/params_windows.png'
import ParamsInterior from '../../images/SFVictorian/params_interior.png'
import RowSweep from '../../images/SFVictorian/sweep_row_count.mp4'
import SlopeSweep from '../../images/SFVictorian/sweep_slope.mp4'
import SlopeSweepPoster from '../../images/SFVictorian/sweep_slope-poster.jpg'
import ParamDemo from '../../images/SFVictorian/param_demo.mp4'
import BlockoutSeeds from '../../images/SFVictorian/blockout_seeds.mp4'
import BlockoutSeedsPoster from '../../images/SFVictorian/blockout_seeds-poster.jpg'
import ParamDemoPoster from '../../images/SFVictorian/param_demo-poster.jpg'
import RowSweepPoster from '../../images/SFVictorian/sweep_row_count-poster.jpg'

// TODO(Felicity): confirm both repo URLs once the GitHub repos exist.
const REPO = 'https://github.com/feliyick/sf-victorian-procedural'
const MCP_REPO = 'https://github.com/feliyick/houdini-mcp'

const seeds = [
  [Seed022, 22], [Seed290, 290], [Seed468, 468],
  [Seed354, 354], [Seed202, 202], [Seed151, 151],
  [Seed500, 500], [Seed480, 480], [Seed222, 222],
].map(([src, n]) => ({ src, alt: `Generated Victorian house, seed ${n}` }))

export default {
  slug: 'sf-victorian-street',
  path: '/project/sf-victorian-street',
  title: 'Painted Ladies: a procedural San Francisco street',
  summary:
    "It's been a while since I last did procedural modelling in Houdini. Most of my recent work has been on AI for games, and I missed building scenes and making pretty renders. So I picked something I see every day in San Francisco, the painted Victorians, relearned what I'd gotten rusty on, and built my own Houdini MCP to help me along the way.",
  meta: {
    where: 'Personal project',
    role: 'Built the HDA and the Houdini MCP. AI-assisted iteration.',
    when: 'November 2026',
    tools: ['Houdini', 'VEX', 'Solaris', 'Karma', 'MaterialX', 'Python', 'MCP'],
  },
  links: [
    // { label: 'Watch the breakdown', href: '' },   // add once the screen recording exists
    { label: 'View the code', href: REPO },
  ],
  hero: GoldenWide,
  heroUncropped: true,   // keep the Houdini Apprentice mark (bottom-right) in frame
  heroVideo: undefined,
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      body: (
        <>
          <p>
            The result is a Houdini digital asset that builds a three-storey Victorian from a seed, plus a street system that lays any number of them down a hill with sidewalks, driveways, trees and Muni wires.
          </p>
          <Gallery items={seeds} cols={3} />
          <p className="cap-note"><em>Nine houses from nine seeds</em></p>
        </>
      ),
    },
    {
      id: 'idea',
      title: 'The idea',
      body: (
        <>
          <p>
            Victorians look like they're all different, but they actually follow a lot of rules. Builders in the 1870s–1900s worked from pattern books: a narrow lot, a stack of bay windows, a door column, a cornice or gable on top, and a small set of ornaments applied in a set order. There are three main styles in SF:
          </p>
          <ul>
            <li><strong>Italianate</strong>: flat roofline with a bracketed cornice, slanted bays, tall arched windows.</li>
            <li><strong>Stick</strong>: squared bays, vertical trim boards, false fronts.</li>
            <li><strong>Queen Anne</strong>: front gables, round towers and bays, fish-scale shingles, the most ornament.</li>
          </ul>
          <p>
            That made it a good fit for a procedural tool, since there's a clear structure with lots of room for variation inside it. Before building anything I wrote the rules down in a design doc (<em>a bay never floats without a corbel, a garage never sits under a bay, brackets line up with the structure below</em>), and each stage of the tool enforces some of them.
          </p>
          <Gallery cols={4} items={[
            { src: Reference1, alt: 'A San Francisco street of bay-windowed flats under string lights' },
            { src: Reference2, alt: 'Cream Victorian with stacked round bays and a columned entry' },
            { src: Reference3, alt: 'Sage and cream angled bays with dark trim, looking up' },
            { src: Reference4, alt: 'White corner building with a curved bay and flat cornice' },
          ]} />
          <p className="cap-note"><em>My reference photos from walks around the city.</em></p>
        </>
      ),
    },
    {
      id: 'tool',
      title: 'The tool',
      body: (
        <>
          <p>
            The house is a single HDA, <code>victorian_house</code>, with 96 parameters across nine tabs: House, Size, Bays, Windows, Entry &amp; Stairs, Roof, Paint, Interior and Ornament. Every menu defaults to <strong>Auto</strong>, so the seed and the style decide. If you set a value yourself, it only overrides that one choice and everything else stays random.
          </p>
          <Media video={ParamDemo} poster={ParamDemoPoster} maxWidth={420}
            alt="The same house with Style, then Roof, then Palette changed one at a time"
            caption="Same seed, one decision at a time: Style, then Roof, then Palette. Everything else stays put." />
          <Switcher
            label="HDA parameter tab"
            maxWidth={560}
            items={[
              { label: 'House', src: ParamsHouse, alt: 'House tab: seed, style, palette, roof, layout row, brick base and round bay chance, edge bevel, house number' },
              { label: 'Size', src: ParamsSize, alt: 'Size tab: width, depth and floor height ranges' },
              { label: 'Bays', src: ParamsBays, alt: 'Bays tab: bay width, gaps, corbel depth and skirt height ranges' },
              { label: 'Windows', src: ParamsWindows, alt: 'Windows tab: window width and count, margins, sill and head lines, casing, hoods, pediments, arches' },
              { label: 'Entry', src: ParamsEntry, alt: 'Entry & Stairs tab: entry and garage widths, porch, pediment, arched door, stair flare and cheek wall chances, garage style' },
              { label: 'Roof', src: ParamsRoof, alt: 'Roof tab: cornice, frieze, brackets, parapet, false front, gable pitch, overhang and count, bracket style and layout' },
              { label: 'Paint', src: ParamsPaint, alt: 'Paint tab: body, trim, accent, pop, sash and door colours, with Copy Current Palette to Custom' },
              { label: 'Interior', src: ParamsInterior, alt: 'Interior tab: relative chance of each window treatment, from sheer lace to a plant on the sill' },
              { label: 'Ornament', src: ParamsOrnament, alt: 'Ornament tab: density, scroll style, gable peak motif, colour, repeat length, curl, leaf size, relief depth' },
            ]}
            caption="All nine tabs. Menus default to Auto; a set value overrides only that decision."
          />
        </>
      ),
    },
    {
      id: 'build',
      title: 'How a house is built',
      body: (
        <>
          <p>
            Each stage is a VEX wrangle that reads the attributes from the stage before it and writes its own. That made each step easy to debug on its own, and I could add new stages without touching the earlier ones.
          </p>

          <h3>1. Layout: a rule table</h3>
          <p>
            <code>building_params</code> picks the lot width, depth and floor heights, then picks a layout from a small rule table. Each row in the table is a valid house (how many bays over the door, how many over the garage, which floor the door is on). Picking a whole row, instead of rolling each feature separately, means you never get something like a bay hanging over a garage door.
          </p>
          <Media video={BlockoutSeeds} poster={BlockoutSeedsPoster} maxWidth={520}
            alt="Colour-coded blockouts of six seeds: each picks a different row of the layout table"
            caption="The blockout behind six seeds. Each one picks a different row of the rule table." />
          <Legend items={[
            { label: 'Flat window', color: '#8000ff' },
            { label: 'Door', color: '#00cc80' },
            { label: 'Garage', color: '#d8d800' },
            { label: 'Bay window', color: '#ff0080' },
            { label: 'Stairs', color: '#ff9900' },
          ]} />

          <h3>2. Bays, openings and the entry</h3>
          <p>
            Bay windows (angled or round) are swept from a plan outline. Windows, doors and garages are cut out with Booleans and then dressed with casings, hoods (flat, pediment or arched), sills, jamb liners so the siding doesn't show inside the recess, and keystones. The stoop and porch are their own unit, with newels, balusters, flares and cheek walls.
          </p>
          <p>
            Anything that needs to line up is built from the same numbers. For example, the wall cut for the front door and the door frame inside it both read the same opening attributes, so no mix of porch, stairs or bays can make them drift apart. Every box also goes through one shared function that bevels its edges by an <strong>Edge Bevel</strong> parameter, so every edge picks up a thin highlight. That small bevel does a lot to stop the trim looking CG.
          </p>
          <Media src={SunnyStreet} alt="Street-level view of bay windows, garages and a stoop in sunlight" caption="Bays, hoods, garages and stoops, all built from the same opening attributes." />

          <h3>3. Roof and cornice</h3>
          <p>
            The cornice is a moulding profile swept along the actual outline of the top floor, bays included, so it wraps around every curve. Gable houses get a full-width entablature first, which is how real SF Queen Annes deal with a triangle sitting over a round bay: the bays rise into a box, and the gable sits on top of the box.
          </p>
          <p>
            Brackets were the most obvious repetition, so each house picks one of four bracket profiles (scroll, console, block, quarter-sweep) and one of four layouts (even, paired, corners, big and small), weighted by style.
          </p>
          <Switcher
            label="Bracket style"
            items={[
              { label: 'Scroll', src: BracketScroll, alt: 'Cornice brackets with a scroll curl at the foot' },
              { label: 'Console', src: BracketConsole, alt: 'Cornice brackets with an S-curve console profile' },
              { label: 'Block', src: BracketBlock, alt: 'Cornice brackets built from stepped blocks' },
              { label: 'Quarter sweep', src: BracketQuarterSweep, alt: 'Cornice brackets with a single quarter-circle sweep' },
            ]}
            caption="The four bracket profiles on the same cornice, with the vine frieze between them."
          />

          <h3>4. Ornament</h3>
          <p>
            The carved ornament (vines, acanthus scrolls, garlands, corner sprays, sunbursts in the gable) grows from slot points that the roof and porch stages leave behind. A slot just says something like <em>"a 3 m × 0.3 m frieze panel goes here, facing this way"</em>, and the ornament wrangle decides what to put there based on the house's style. Because of that split, I could add ornament late without reworking the roof.
          </p>
          <Media src={OrnamentStyles} alt="Ornament vocabulary: vine, acanthus, Greek key and garland friezes; sunburst, fan, spray and medallion gable motifs"
            caption="The ornament vocabulary, drawn as reference: frieze patterns (left) and gable-peak motifs (right)." />

          <h3>5. Windows that look lived in</h3>
          <p>
            With black glass every house looked abandoned, so each window got a shallow room behind it, with walls in one of eight paint colours and a few furniture silhouettes (a sofa back, a bookshelf, a pendant lamp, a plant). In front of that hangs a window treatment: sheers, tied drapes, a half-drawn blind, closed drapes, or a plant on the sill. Each floor is treated as its own flat, since in SF they usually are, so one floor might have burgundy drapes and the one above cream sheers. Curtains are fitted to curved bay glass with a small least-squares curve per window, using only the glass facets that face the same way as the window.
          </p>
          <Media src={SunnyTele} alt="Telephoto view of window treatments and ornament" caption="Every window has a room, a treatment and a flat it belongs to." />
          <p>
            Every face in a room (walls, furniture, the glowing shade of a floor lamp) shares the same <strong>room ID</strong>, and the paint stage works everything out from it: whether the room is lit, how bright, and whether the bulb leans orange incandescent or warm-white LED. That keeps each room looking like one space, and it's why about 3 in 4 rooms glow at night, each a slightly different colour, like a real street.
          </p>
          <Media src={NightWide} alt="The row at night with varied lit rooms" caption="About 3 in 4 rooms lit, each its own colour." />

          <h3>6. Paint and materials</h3>
          <p>
            Every face gets a paint role (body, trim, accent, pop, sash, door) from the groups the earlier stages wrote, then a colour from one of twelve palettes, or a custom one. The rules come from real restorations: trim is almost always cream, the pop colour only goes on small details, big brackets are usually trim or body colour, and the stair cheek walls carry the body colour down to the sidewalk.
          </p>
          <p>
            The materials are MaterialX, fully procedural and in world space, with no UVs anywhere: clapboard siding with lap shadows, brick, fish-scale shingles, granite, marble and asphalt. A Python script generates them into a versioned <code>.mtlx</code> file, so changing a material just means regenerating it.
          </p>
          <Media src={Palettes} alt="The twelve palettes, from Postcard Blue to Classic White, each with body, trim, accent and door colours"
            caption="The twelve palettes. Trim is almost always cream; the pop colour stays on small details." />
        </>
      ),
    },
    {
      id: 'street',
      title: 'The street',
      body: (
        <>
          <p>
            One house on its own doesn't look like San Francisco, so the street system takes any row of houses and builds everything around them. It reads the houses' own geometry rather than hard-coded positions:
          </p>
          <ul>
            <li>The row steps <strong>down a 6% hill</strong>, each house set at the height of the ground under it, so the cornice line staggers.</li>
            <li>The <strong>sidewalk widens</strong> to fit the deepest stoop, in whole 1.5 m slabs.</li>
            <li><strong>Driveways</strong> slope from each garage sill to a curb cut that's found from the garage doors.</li>
            <li><strong>Trees, gardens, bins, lamp posts, hydrants and a Muni stop</strong> all place themselves and slide clear of stoops, driveways and each other.</li>
            <li>Overhead <strong>trolley wires</strong>, low-detail houses continuing the block, a hazy city below the crest, and Twin Peaks with Sutro Tower fill the background.</li>
          </ul>
          <p>
            If you change one house's seed, its neighbours shift, the driveways move and the trees re-space.
          </p>
          <Media src={GoldenRowDown} alt="Looking down the hill along the row at golden hour" caption="Down the hill: staggered cornices, lamps, trees and the city below." />
          <Media video={RowSweep} poster={RowSweepPoster} alt="The row growing from one house to seven, with the street rebuilding around it" caption="Row Count 1 → 7. The sidewalk, driveways, trees and lamps rebuild around whatever houses are there." />
          <Media video={SlopeSweep} poster={SlopeSweepPoster} alt="The same row on a flat street and on hills up to 12 percent" caption="Slope 0 → 12%. Each house sits at the height of the ground under it, so the cornice line staggers down the hill." />
        </>
      ),
    },
    {
      id: 'lighting',
      title: 'Lighting and rendering',
      body: (
        <>
          <p>
            It's rendered in Karma (CPU) through Solaris, with four looks on one switch: sunny, golden hour, dusk and night. Golden hour is a low sun raking across the facades, so every moulding and bevel casts a shadow. Night took the most work. A physical sky doesn't actually go dark, and darkening the dome light darkens the whole street too. So for night I split them: a dim dome and a moon light the scene, and a navy gradient dome that only the camera can see (Karma render visibility <code>primary</code>) gives the sky. The room glow lives in the materials, so it behaves consistently across looks (washed out in the sun, carrying the picture at night). The street lamps only turn on for dusk and night, and there's a real light under each lamp head so it casts a pool on the sidewalk.
          </p>
          <Switcher
            label="Lighting look"
            items={[
              { label: 'Sunny', src: SunnyFront, alt: 'The row face-on in midday sun' },
              { label: 'Golden hour', src: GoldenFront, alt: 'The row face-on at golden hour' },
              { label: 'Night', src: NightFront, alt: 'The row face-on at night' },
            ]}
            caption="Same street, one switch."
          />
          <Gallery
            cols={2}
            items={[
              { src: GoldenAerial, alt: 'Aerial view of the street at golden hour', caption: 'Aerial, golden hour.' },
              { src: NightRowUp, alt: 'Looking up the hill at night', caption: 'Up the hill at night.' },
            ]}
          />
        </>
      ),
    },
    {
      id: 'ai',
      title: 'How I worked with AI on this',
      body: (
        <>
          <p>
            This project was me getting back into Houdini, and I built about half of the house HDA by hand. Early on I used Claude a lot like a senior TD I could ask anything: it answered VEX and Houdini questions, talked through how to structure stages with me, and helped me debug. The rules, the network and the design decisions were mine.
          </p>
          <p>
            Once the base was in place, the slow part was the back-and-forth: pasting code in, cooking, taking screenshots, and explaining what looked wrong. So I built my own Houdini MCP server (more below) so the agent could work in the live scene directly. It could read the network, make small edits, render a preview and look at it, while I made the decisions.
          </p>
          <p>
            A few things made this work well:
          </p>
          <ul>
            <li>The project keeps its own notes. The agent starts every session from scratch, so I kept a design-rules doc and a <code>CLAUDE.md</code> with the file map, scene layout, conventions and every VEX pitfall I'd run into. A new session could pick up where the last one stopped.</li>
            <li>Every edit the agent makes is backed up first, is one undo step, and never changes a value I've set by hand, so I never worried about losing work.</li>
            <li>The agent checks its own work. After a change it re-cooks the asset and the stage, checks real geometry values, and looks at a viewport capture or a quick render before saying something's fixed.</li>
            <li>I still review everything. Turning my notes into rules (bracket variety weighted by style, lamps tied to the lighting look, one light per room) was most of the design work.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'mcp',
      title: 'Building my own Houdini MCP',
      body: (
        <>
          <p>
            I built it to learn how MCP works, and to speed up iterating on this scene. There are two parts: a small listener that runs inside my open Houdini session, and a server the agent connects to. Through it the agent can read the network, set parameters, cook and check for errors, take viewport captures and render a Karma preview it can look at, and I can watch every change happen in the viewport.
          </p>
          <p>
            I added the guardrails I wanted for my own scene: every edit is backed up first and is a single undo step, every edit has a dry run, the agent can only write to the parts of the scene I allow, and its undo won't touch anything I changed by hand. The first live test actually found a bug in my scene: two Python LOPs were adding a step to Houdini's undo history every time they cooked.
          </p>
          <p>
            It works on any scene, not just this one:{' '}
            <a href={MCP_REPO} target="_blank" rel="noreferrer">houdini-mcp</a>. I used it for the later detail passes and for the captures on this page, and the synthetic data work is next.
          </p>
        </>
      ),
    },
    {
      id: 'next',
      title: "What's next",
      body: (
        <>
          <ul>
            <li><strong>Synthetic data:</strong> every window, door and bay is already labelled, so the generator can produce annotated training images.</li>
            <li><strong>Gaussian splats and simulation:</strong> capture the street as a splat scene, then drop a robot into it.</li>
          </ul>
          <p>
            Houdini 20.5 (Apprentice) · VEX · Python · Solaris / USD · Karma CPU · MaterialX<br />
            <em>Rendered at 1280×720 under a non-commercial licence.</em>
          </p>
        </>
      ),
    },
  ],
}
