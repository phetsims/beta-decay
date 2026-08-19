# Beta Decay - Model

This document is a high-level description of the model used in PhET's *Beta Decay* simulation.

Beta decay is modeled as a random process governed by each isotope's half-life: on every time step, each nucleus has
some probability of decaying, derived from that half-life. The sim also includes a simplified representation of what
happens inside the nucleus when a decay occurs: a neutron turning into a proton, and the particles that are emitted.

## Nucleus and Decay

A nucleus is described by its *_**atomic number**_* (number of protons, which determines the element) and its
*_**mass number**_* (total number of protons and neutrons, together called *_**nucleons**_*).

In beta-minus decay, a neutron inside a *_**parent nucleus**_* turns into a proton by way of the *_**weak nuclear
force**_*, and the nucleus emits an *_**electron**_* (also called a *_**beta particle**_*) and an
*_**antineutrino**_*, becoming a *_**daughter nucleus**_* of a different element. The daughter nucleus always has
exactly 1 more proton and 1 fewer neutron than the parent, so its mass number is unchanged; nucleon number and charge
are conserved between the parent nucleus and the daughter nucleus plus the emitted particles.

Only beta-minus decay is modeled. Other beta processes are not included: positron emission (beta-plus) and electron
capture, in which a proton becomes a neutron.

The Single Atom screen keeps one nucleus in the play area at a time. The Multiple Atoms and Decay Rates screens
instead work with many nuclei at once (see Samples, below).

The sim's isotopes are Hydrogen-3 (the default), Carbon-14, Iodine-131, and a "Custom" isotope. The three real
isotopes are available on all 3 screens; Custom is available on Single Atom and Multiple Atoms, but not Decay Rates.
Custom is a fixed, representative nucleus, not a specific real-world isotope; only its half-life can be adjusted. Its
parent and daughter are labeled "Isotope A" and "Isotope B" rather than element names.

A nucleus's drawn size is not to real physical (femtometer) scale; it uses a simplified, unitless packing model,
adequate for relative comparisons but not for quantitative measurement. The electron cloud was also ignored in this representation.

## Half-Life

*_**Half-life**_* is the time for half of an identical sample of nuclei to decay. It is a fixed property of an
isotope: it does not change as a sample decays, and it does not depend on how many atoms are in the sample.

Individual decay events are unpredictable. Whether a given nucleus decays is determined by treating each isotope's
half-life as a decay constant, and testing each nucleus against it on every time step:

* decay constant: `λ = ln(2) / halfLife`
* probability of decaying during a short time `Δt`: `P = 1 - e^(-λΔt)`

A large sample of nuclei, each obeying this same random process independently, decays overall at the familiar
exponential rate, losing half its remaining amount every half-life, even though no individual nucleus can be
predicted.

| Parent            | Daughter    | Half-life                |
|-------------------|-------------|--------------------------|
| Hydrogen-3        | Helium-3    | 12.32 years              |
| Carbon-14         | Nitrogen-14 | 5730 years               |
| Iodine-131        | Xenon-131   | 8.03 days                |
| Custom, Isotope A | Isotope B   | adjustable, 2 – 60 years |

These three half-lives span five orders of magnitude, from days to millennia. Carbon-14's 5730-year half-life is the
one used for radiocarbon dating. Custom's range matches Hydrogen-3's timescale.

## Emitted Particles

When a decay occurs, the neutron at the center of the nucleus turns into a proton. In the sim we show this as fading, so users can notice it better, although in reality the process is actually instantaneous. An electron and an antineutrino
appear at the center of the nucleus and move away from it. Unlike alpha decay, no potential energy barrier or quantum
tunneling is involved, so the emitted particles are not delayed at, or launched from, the edge of the nucleus.

The sim does not model the energies of the decay. The energy released, and the fact that a real beta electron emerges
with a range of possible kinetic energies (shared with the antineutrino), are not represented. The two particles leave
back-to-back in a direction chosen at random, and their speeds are fixed values chosen for visual clarity, not derived
from any physical energy calculation.

Two preferences change how the emitted particles are presented, without affecting when or how decay happens:

* An **Antineutrino** preference (on by default) shows or hides the antineutrino during decay.
* An **Electron Label** preference chooses the term used for the emitted particle in the legend, either
  "Electron (β⁻)" or "Beta Particle (Electron)".

## Samples

The Multiple Atoms and Decay Rates screens add a batch of identical nuclei to the play area at once. Every nucleus in
the sample decays independently and randomly according to the same half-life probability described above.

On the Multiple Atoms screen, sample size goes up to 100 atoms, default 10. Nuclei are spread out on screen only for
visual clarity, so their positions have no physical meaning. A stopwatch tracks elapsed time; the time of each decay is
recorded on a timeline with the isotope's half-life marked, alongside a chart of the fraction of the sample that has
not yet decayed.

On the Decay Rates screen, sample size goes up to 1000 atoms, default 100. Nuclei are drawn as plain spheres with no
emitted-particle animation. A graph plots percentage remaining of the parent isotope (and percentage grown of the
daughter isotope) against time, scaled so that exactly 6 half-lives fit across the graph regardless of the isotope's
actual half-life; half-life markers are shown along the time axis, and a draggable probe reads off percentages at a
chosen time. A "Sort" control arranges the sample into a grid, undecayed atoms first; sorting is for visual clarity
only and does not affect decay timing.

## Time and Reset

Play/pause and step-forward time controls, with a Normal/Slow speed choice, are available on all 3 screens.

Model time is tracked on the same scale as an isotope's actual half-life, and each isotope uses the units natural to
its own timescale:

| Isotope                 | Displayed timeline    |
|-------------------------|-----------------------|
| Hydrogen-3, and Custom  | 2 – 60 years          |
| Iodine-131              | 1 – 40 days           |
| Carbon-14               | 500 – 30,000 years    |

At Normal speed, traversing the whole displayed timeline takes about 15 seconds of real time (about 37 seconds at Slow
speed), whether that timeline covers days or tens of thousands of years.

On the Single Atom screen, a "Replay" control, enabled after a decay, rewinds to just before that decay.

Reset, on each screen, restores the default isotope selection and any Custom half-life adjustment, and clears the
current nucleus or sample.
