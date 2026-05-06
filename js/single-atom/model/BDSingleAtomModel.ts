// Copyright 2026, University of Colorado Boulder

/**
 * Single Atom Model handles the state and behavior of a single atom in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import SingleAtomModel, { SingleAtomDecayModelOptions } from '../../../../nuclear-decay-common/js/single-atom/model/SingleAtomModel.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BetaDecayConstants from '../../common/BetaDecayConstants.js';

type SelfOptions = EmptySelfOptions;

type BDSingleAtomModelOptions = SelfOptions & SingleAtomDecayModelOptions;

export default class BDSingleAtomModel extends SingleAtomModel {

  public constructor( providedOptions: BDSingleAtomModelOptions ) {
    const options = optionize<BDSingleAtomModelOptions, SelfOptions, SingleAtomDecayModelOptions>()( {
      maxNumberOfAtoms: 1
    }, providedOptions );

    super( BetaDecayConstants.SELECTABLE_ISOTOPES, 'betaMinusDecay', options );

    this.selectedIsotopeProperty.setInitialValue( 'hydrogen-3' );
    this.selectedIsotopeProperty.reset();
  }
}
