import { Legend } from '../../components/case/blocks'
import LabelExplorer from '../../components/case/LabelExplorer'
import Card from '../../images/SynthData/card.jpg'

const MCP_REPO = 'https://github.com/feliyick/houdini-mcp'
const HDA_REPO = 'https://github.com/feliyick/sf-victorian-procedural'

export default {
  slug: 'synthetic-street-data',
  path: '/project/synthetic-street-data',
  title: 'Synthetic street data from a procedural city',
  summary: (
    <>
      I'd never done synthetic data labelling before, so I wanted to use my{' '}
      <a href="/project/sf-victorian-street">Painted Ladies</a> street as an exercise to learn how it works. Since every
      window, door and bay in the street is generated, the scene already knows what everything is. I used{' '}
      <a href={MCP_REPO} target="_blank" rel="noreferrer">my Houdini MCP</a> to turn it into a dataset generator, so every
      render comes with labels for each pixel, bounding boxes, depth and camera data.
    </>
  ),
  meta: {
    where: 'Personal project',
    role: 'Labelling design, HDA changes, MCP tooling, dataset pipeline',
    when: 'November 2026',
    tools: ['Houdini', 'Solaris / USD', 'Karma AOVs', 'Python', 'MCP', 'COCO'],
  },
  links: [
    { label: 'View the Houdini MCP', href: MCP_REPO },
    { label: 'View the Houdini HDA', href: HDA_REPO },
  ],
  hero: Card,
  heroUncropped: true,
  sections: [
    {
      id: 'explore',
      title: 'Explore a sample',
      body: (
        <>
          <p>
            Hover over the image to see what each pixel is labelled as. Click an object to pin it and see its full
            annotation. You can also switch between the class map, the instance map (a different colour for each object),
            depth and surface normals.
          </p>
          <LabelExplorer base="/synth/" />
          <Legend items={[
            { label: 'Wall', color: '#808080' }, { label: 'Window', color: '#00c8e6' }, { label: 'Door', color: '#00c864' },
            { label: 'Garage', color: '#e6dc00' }, { label: 'Bay', color: '#ff0080' }, { label: 'Stairs', color: '#ff9600' },
            { label: 'Porch', color: '#965ae6' }, { label: 'Roof', color: '#8c5028' }, { label: 'Ornament', color: '#ffffff' },
            { label: 'Road', color: '#32323c' }, { label: 'Sidewalk', color: '#bebeb4' }, { label: 'Vegetation', color: '#288c28' },
          ]} />
        </>
      ),
    },
    {
      id: 'why',
      title: 'Why synthetic labels',
      body: (
        <>
          <p>
            To train a model to recognise things like windows and doors, you need a lot of images where every pixel is
            labelled. Labelling real photos by hand takes a long time. With a rendered scene, the labels can come straight
            out of the render, since the scene already knows what each object is.
          </p>
          <p>
            Robotics and self-driving teams use synthetic data like this a lot, especially for situations that are hard to
            capture in real life. Changing things like lighting, colours and camera angles between images helps a model
            focus on what matters. A procedural street makes that easy, since every seed gives a different street.
          </p>
        </>
      ),
    },
    {
      id: 'policy',
      title: 'Deciding what the labels mean',
      body: (
        <>
          <p>
            Before rendering anything, I had to decide what the labels should mean. Each pixel gets one class. When one
            object sits inside another, the more specific one wins, so a window inside a bay is labelled as a window. Each
            object also gets its own ID, and windows inside a bay are linked to that bay, so the bay can still be found as a
            whole.
          </p>
          <p>
            For the houses, the classes are walls, windows, doors, garages, bays, stairs, porches, roofs, ornament and house
            numbers. The street (road, sidewalk, trees, street furniture and the buildings in the distance) only gets
            classes, without separate IDs, since you wouldn't need to count those.
          </p>
        </>
      ),
    },
    {
      id: 'pipeline',
      title: 'How it works',
      body: (
        <>
          <p>
            I added the labels inside the house HDA, right after each step that builds geometry. The step that builds the
            windows already knows it's making windows, so it's the most reliable place to tag them. Every face gets three
            attributes: what it is (<code>semantic_id</code>), which object it belongs to (<code>instance_id</code>), and the
            object it sits inside (<code>parent_id</code>). At the street level, each house's IDs are made unique, and the
            street pieces get their classes.
          </p>
          <p>
            These attributes carry over into Solaris, where Karma renders them as extra image layers alongside the normal
            render. Each frame is rendered twice: once normally, and once with every material made opaque for the labels,
            because transparent glass would mix a window's ID with the room behind it. The label render uses one sample per
            pixel, so no pixel is ever an average of two objects. It also outputs depth and normals.
          </p>
          <p>
            All of this runs through one tool in my MCP, <code>synth_render</code>. For each seed and camera, it renders both
            passes, saves the images and label maps, and writes everything into a COCO file, a common format for detection
            datasets.
          </p>
          <p>
            In the USD stage, the faces are grouped by material, since that's how the materials get assigned. So the object
            hierarchy (house, bay, window) lives in the primvars on each face rather than in the prim paths. The explorer
            above shows both: the hierarchy built from those IDs, and the primvar values on the object you select. A next
            step would be to restructure the stage so each object is its own prim, which is how tools like NVIDIA's
            Replicator organise their scenes.
          </p>
        </>
      ),
    },
    {
      id: 'sample',
      title: 'What each sample contains',
      body: (
        <>
          <ul>
            <li>The rendered image, in one of the lighting looks.</li>
            <li>A class map and an instance map, with one value per pixel.</li>
            <li>A depth map and a surface normal map.</li>
            <li>For every object: its class, 2D box, mask, size in pixels, the object it sits inside, and its 3D box.</li>
            <li>The camera's lens and position, so the 2D images can be matched back to 3D.</li>
            <li>The seed, camera and lighting look it was made with.</li>
            <li>A scene file per seed with each house's door, stairs and porch boxes and the step sizes, in metres, for rebuilding the stoop in a physics simulator.</li>
          </ul>
          <p>
            The full run was 10 seeds, 3 cameras (a street view, a sidewalk view and one at robot height, about 1.2 m off
            the ground) and 2 lighting looks: 60 images and 2,286 labelled objects. An automatic check caught 4 frames
            where a backdrop building sat right in front of the camera; I fixed the backdrop and rendered those again. The
            whole run took about three hours on my Mac's CPU.
          </p>
          <table className="cs-table">
            <thead><tr><th>Class</th><th>Objects</th></tr></thead>
            <tbody>
              <tr><td>Window</td><td>1,152</td></tr>
              <tr><td>Bay</td><td>242</td></tr>
              <tr><td>Wall</td><td>230</td></tr>
              <tr><td>Garage</td><td>152</td></tr>
              <tr><td>Door</td><td>148</td></tr>
              <tr><td>Roof</td><td>138</td></tr>
              <tr><td>Porch</td><td>104</td></tr>
              <tr><td>Stairs</td><td>98</td></tr>
              <tr><td>House number</td><td>22</td></tr>
            </tbody>
          </table>
          <p>
            380 of those objects are linked to a parent, mostly windows inside bays. That's enough to test the pipeline, but
            far too small to train a real model on. That would take hundreds or thousands of frames from overnight runs.
          </p>
        </>
      ),
    },
    {
      id: 'package',
      title: "What's in the download",
      body: (
        <>
          <p>
            Each batch is one folder per camera and lighting look, plus a single <code>annotations.json</code> that covers
            every frame. This is the layout:
          </p>
          <pre><code>{`synth_dataset/
  annotations.json            one COCO file for every frame
  cam_wide_golden/
    images/cam_wide_golden_22.png          the render
    labels/cam_wide_golden_22_class.png    class per pixel (8-bit)
    labels/cam_wide_golden_22_instance.png object ID per pixel (16-bit)
    labels/cam_wide_golden_22_depth.png    metres x 256 (16-bit)
    labels/cam_wide_golden_22_normal.png   surface direction as colour
  cam_street_sunny/ ...
  cam_robot_golden/
    images/, labels/
    scene/seed_22.json     door, stairs and porch boxes, step sizes`}</code></pre>
          <p>
            And this is one annotation from that file, the front door of the hero house in seed 22. The mask is stored as
            run lengths (so many pixels off, so many on), which is how COCO keeps masks small.
          </p>
          <pre><code>{`{
  "category_id": 3,                 // door
  "instance_id": 1300,              // house 0 (the hero), object 300
  "bbox": [58, 222, 74, 95],        // x, y, width, height in pixels
  "area": 4935,                     // visible pixels
  "segmentation": { "size": [360, 640], "counts": [21193, 4, 303, ...] },
  "bbox_3d": [0.39, 0.18, -1.21, 2.57, 3.03, 0.06],   // world box, metres
  "parent_id": 0                    // not inside another object
}`}</code></pre>
          <p>
            Every image entry also stores the camera: focal length and image centre in pixels, and where the camera sits in
            the world. With that and the depth map, any pixel can be turned back into a 3D point.
          </p>
          <p>
            <a className="btn primary" href="/synth/sample_dataset.zip" download>Download two sample frames (1.5 MB)</a>
          </p>
        </>
      ),
    },
    {
      id: 'problems',
      title: 'Problems I ran into',
      body: (
        <>
          <ul>
            <li>Glass mixed up the IDs of windows and the rooms behind them, so the labels needed their own render with opaque materials.</li>
            <li>Karma saved the label layers in a separate part of the image file, which my first version didn't read.</li>
            <li>My first label render still blended IDs where objects meet: 14% of pixels held a number that wasn't a real ID. Karma has a filter meant to stop this, but it had no effect in my setup. At first I patched the bad pixels afterwards by snapping them to a valid neighbour, which hid the problem rather than fixing it. Comparing the two versions later showed the patch had invented about 300-pixel "house numbers" in dark gaps between houses. Now the label render takes exactly one sample per pixel, so each pixel comes from a single surface. The edges are jagged, but every label is exact, and across all 64 frames rendered the check found 0 pixels to fix.</li>
            <li>The Houdini Apprentice watermark appears in every layer, so that corner is marked to be ignored.</li>
            <li>Depth of field blurred the edges, so it's switched off for the label render.</li>
            <li>Checking the first batch, I found two seeds where a backdrop building sits right in front of the wide camera. The labels were correct, but the images were useless. Depth caught it: a "distant" building shouldn't be 1 m from the camera. That check now runs after every batch, and frames that fail are left out of the dataset and listed in a QA report. The cause was the street getting narrower on some seeds, which put the houses across the street on top of the camera, so I fixed that and rendered those frames again.</li>
          </ul>
        </>
      ),
    },
  ],
}
