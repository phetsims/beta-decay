// Copyright 2026, University of Colorado Boulder

/**
 * MultipleAtomsModel handles the state and behavior of the Multiple Atoms screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import MultipleAtomsModel, { MultipleAtomDecayModelOptions } from '../../../../nuclear-decay-common/js/multiple-atoms/model/MultipleAtomsModel.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BetaDecayConstants from '../../common/BetaDecayConstants.js';

type SelfOptions = EmptySelfOptions;

type BDMultipleAtomsModelOptions = SelfOptions & MultipleAtomDecayModelOptions;

export default class BDMultipleAtomsModel extends MultipleAtomsModel {

  public constructor( providedOptions: BDMultipleAtomsModelOptions ) {
    const options = optionize<BDMultipleAtomsModelOptions, SelfOptions, MultipleAtomDecayModelOptions>()( {
      useStopwatch: true
    }, providedOptions );

    super( BetaDecayConstants.SELECTABLE_ISOTOPES, 'betaMinusDecay', options );

    this.selectedIsotopeProperty.setInitialValue( 'hydrogen-3' );
    this.selectedIsotopeProperty.reset();
  }
}
