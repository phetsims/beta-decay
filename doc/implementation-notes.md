# Beta Decay - Implementation Notes

## File Structure

```
js/
  common/          Base model (BetaDecayModel) and view (BetaDecayScreenView)
  single-atom/     Single atom screen (ADSingleAtomModel/ADSingleAtomScreenView)
  multiple-atoms/  Multiple atoms screen (ADMultipleAtomsModel/ADMultipleAtomsScreenView)
  decay-rates/     Decay rates screen (ADDecayRateModel/ADDecayRateScreenView)
```

Beta Decay is part of the Nuclear Decay Suite of simulations (Alpha Decay, Beta Decay, Radioactive Dating Game), with
shared components declared in the `nuclear-decay-common` repository.

[We suggest reading those implementation notes first to have a better grasp of the shared components, then you can see the specifics of Beta Decay here.](https://github.com/phetsims/totality/blob/main/nuclear-decay-common/doc/implementation-notes.md)

## Query Parameters
When using the `&dev` query parameter, a yellow 'Force Decay' button will show up in the single atom screens.
It is useful for debugging so you don't have to wait for the whole decay duration, which could take ages due to its
random nature.

Two public query parameters set the initial values of the sim-specific preferences: `antineutrinoVisible` (boolean,
default `true`) controls whether the antineutrino is shown during decay, and `electronLabel` (either `electron` or
`betaParticle`, default `electron`) controls the term used to label the electron particle. Each one only seeds the
corresponding preference Property, so the user can still change it from the Preferences dialog at runtime.
