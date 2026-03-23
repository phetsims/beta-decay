// Copyright 2026, University of Colorado Boulder
/**
 * Shared Screen View across the Beta Decay Sim, defines the generic type for the common screen view.
 *
 * @author Agustín Vallejo
 */

import NuclearDecayScreenView, { NuclearDecayScreenViewOptions } from '../../../../nuclear-decay-common/js/view/NuclearDecayScreenView.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BetaDecayModel, { BDSelectableIsotopes } from '../model/BetaDecayModel.js';

type SelfOptions = EmptySelfOptions;

export type BetaDecayScreenViewOptions = SelfOptions & NuclearDecayScreenViewOptions;

export default class BetaDecayScreenView extends NuclearDecayScreenView<BDSelectableIsotopes> {
  public constructor( model: BetaDecayModel, providedOptions: BetaDecayScreenViewOptions ) {
    const options = optionize<BetaDecayScreenViewOptions, SelfOptions, NuclearDecayScreenViewOptions>()( {
      // Default options go here
    }, providedOptions );

    super( model, options );
    //nop
  }
}
