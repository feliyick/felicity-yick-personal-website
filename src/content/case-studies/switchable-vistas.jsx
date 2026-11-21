import { Media } from '../../components/case/blocks'
import VistasFarField from '../../images/work/meta/switchable-vistas/vistas-far-field.jpg'
import VistasPocketContent from '../../images/work/meta/switchable-vistas/vistas-pocket-content.jpg'

export default {
  slug: 'switchable-vistas',
  path: '/work/switchable-vistas',
  title: 'Immersive Homes — Switchable Vistas Pipeline',
  summary:
    "As a pipeline and production TA, I helped architect and ship the Switchable Vistas system for Meta's Quest OS home environment — the feature allowing users to swap between distinct scenery themes (Central, Valley, Midnight, Oceanarium), each replacing not just the far-field environment but the pocket content within the home footprint as well.",
  meta: {
    where: 'Meta Reality Labs',
    role: 'Senior Technical Artist (IC5)',
    when: 'Shipped Quest OS v81, Connect 2025',
    tools: ['Python', 'Unreal Engine', 'USD', 'Lightmap Baking', 'Quest'],
  },
  links: [],
  hero: VistasFarField,
  heroVideo: undefined,
  sections: [
    {
      id: 'vista-themes',
      title: 'Vista Themes',
      body: (
        <>
          <p>
            Each vista swaps both the far-field scenery and the in-footprint pocket content,
            giving the home environment a fully coherent reskin per theme.
          </p>
          <Media
            src={VistasFarField}
            alt="Far-field scenery: Midnight, Valley, and Oceanarium vistas"
            caption="Far-field scenery across the Midnight, Valley, and Oceanarium themes."
          />
          <Media
            src={VistasPocketContent}
            alt="Pocket content within the home footprint"
            caption="Pocket content within the home footprint — material, lighting, and architectural variations across themes."
          />
        </>
      ),
    },
    {
      id: 'pipeline',
      title: 'Pipeline',
      body: (
        <>
          <p>
            I held the baton on the Switchable Vistas asset ingestion pipeline — work the team
            had begun before I joined the effort, which I carried forward by hardening it,
            productionising it, and growing its capability surface across LODs, multi-material
            setups, texture atlases, and baked lightmaps.
          </p>
          <p>
            The tooling is a collection of Unreal Engine plugins authored in a mix of Unreal
            Blueprints and Python. It exposes artist-facing operations to bake, merge, and export
            lightmaps for Meta's internal rendering engine, and interfaces with custom C++ Unreal
            Engine source code (mostly authored by an external vendor, with some contributions of
            my own) where the public Unreal API fell short — extending native engine behaviour to
            fit our internal pipeline's needs.
          </p>
          <p>
            As the main point of contact for the tool, I onboarded the internal artist team,
            fellow technical artists, and external vendors onto its use. The pipeline was
            subsequently standardised and adopted as shared infrastructure across both the
            Immersive Homes product and the Events team (VR concert experiences), reducing
            duplicated effort across two product lines.
          </p>
        </>
      ),
    },
    {
      id: 'lightmap-baking',
      title: 'Lightmap Baking',
      body: (
        <>
          <p>
            Tuned the lightmap baking workflow to meet the performance and quality constraints of
            standalone VR hardware — balancing bake quality against atlas size, memory budget, and
            runtime sample cost for the Quest target.
          </p>
        </>
      ),
    },
    {
      id: 'cross-team-collaboration',
      title: 'Cross-Team Collaboration',
      body: (
        <>
          <p>
            The work required close coordination with OS engineering, MHE engineering, UX design,
            and fellow technical artists to reconcile technical constraints with creative intent
            at each stage of the pipeline.
          </p>
        </>
      ),
    },
  ],
}
