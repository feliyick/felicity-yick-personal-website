export default {
  slug: 'hyperscape-prototyping',
  path: '/work/hyperscape-prototyping',
  title: 'Immersive Homes — Hyperscape Prototyping',
  summary:
    "Hyperscape is Meta's product for capturing real-world environments as 3D Gaussian Splats (radiance-field representations) for photoreal playback in VR. I prototyped its integration into the Immersive Homes pipeline — building tooling to feed the splat reconstruction pipeline from synthetic Unreal scenes, partnering with Hyperscape engineering on runtime optimisation, and experimenting with post-training splat animation.",
  meta: {
    where: 'Meta Reality Labs',
    role: 'Senior Technical Artist (IC5)',
    tools: ['3D Gaussian Splatting', 'Radiance Fields', 'Unreal Engine', 'Python', 'Quest'],
  },
  links: [],
  hero: null,
  heroVideo: undefined,
  sections: [
    {
      id: 'unreal-driven-capture-pipeline',
      title: 'Unreal-Driven Capture Pipeline',
      body: (
        <>
          <p>
            Prototyped a pipeline for generating 3DGS training datasets directly from Unreal Engine
            scenes — automating 360° panoramic plate captures alongside per-pixel spatial metadata
            (depth, world position) and exporting the result in the format expected by the
            Gaussian Splatting reconstruction pipeline. This let the team iterate on splat training
            against fully controlled synthetic inputs rather than only real-world captures.
          </p>
        </>
      ),
    },
    {
      id: 'splat-optimisation-for-standalone-vr',
      title: 'Splat Optimisation for Standalone VR',
      body: (
        <>
          <p>
            Worked alongside the Hyperscape engineering team to bring trained splat models within
            the memory and frame-time budget of the Quest standalone runtime. Areas of focus included:
          </p>
          <ul>
            <li>Gaussian pruning and densification strategies to balance visual fidelity against splat count.</li>
            <li>Per-Gaussian attribute quantisation to reduce the on-device footprint.</li>
            <li>LOD strategies for splat models, including view-dependent culling.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'post-training-splat-animation',
      title: 'Post-Training Splat Animation',
      body: (
        <>
          <p>
            Explored animating splat models after training — moving beyond static scene playback:
          </p>
          <ul>
            <li>
              <strong>Rigid-body animation</strong> — applied scripted transforms to segmented
              Gaussian clusters, driving sub-regions of the scene independently while preserving
              the rest of the splat geometry.
            </li>
            <li>
              <strong>Skeleton-bound deformation</strong> — bound splat groups to rigs to drive
              character-style articulated motion on splat representations, testing how far the
              representation could be pushed beyond static capture.
            </li>
          </ul>
        </>
      ),
    },
  ],
}
