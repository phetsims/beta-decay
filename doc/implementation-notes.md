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