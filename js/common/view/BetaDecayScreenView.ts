// Copyright 2026, University of Colorado Boulder
/**
 * Shared Screen View across the Beta Decay Sim, defines the generic type for the common screen view.
 *
 * @author Agustín Vallejo
 */

import NuclearDecayModel from '../../../../nuclear-decay-common/js/model/NuclearDecayModel.js';
import DecayHistogramScreenView, { DecayHistogramScreenViewOptions } from '../../../../nuclear-decay-common/js/view/DecayHistogramScreenView.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';

type SelfOptions = EmptySelfOptions;

export type BetaDecayScreenViewOptions = SelfOptions & DecayHistogramScreenViewOptions;

export default class BetaDecayScreenView extends DecayHistogramScreenView {
  public constructor( model: NuclearDecayModel, providedOptions: BetaDecayScreenViewOptions ) {
    const options = optionize<BetaDecayScreenViewOptions, SelfOptions, DecayHistogramScreenViewOptions>()( {
    }, providedOptions );

    super( model, options );
    //nop
  }
}
