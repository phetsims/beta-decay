// Copyright 2026, University of Colorado Boulder

/**
 * Single Atom Model handles the state and behavior of a single atom in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import SingleAtomDecayModel, { SingleAtomDecayModelOptions } from '../../../../nuclear-decay-common/js/common/model/SingleAtomDecayModel.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BetaDecayConstants from '../../common/BetaDecayConstants.js';

type SelfOptions = EmptySelfOptions;

type BDSingleAtomModelOptions = SelfOptions & SingleAtomDecayModelOptions;

export default class BDSingleAtomModel extends SingleAtomDecayModel {

  public constructor( providedOptions: BDSingleAtomModelOptions ) {
    const options = optionize<BDSingleAtomModelOptions, SelfOptions, SingleAtomDecayModelOptions>()( {
      maxNumberOfAtoms: 1
    }, providedOptions );

    super( BetaDecayConstants.SELECTABLE_ISOTOPES, options );

    this.selectedIsotopeProperty.setInitialValue( 'hydrogen-3' );
    this.selectedIsotopeProperty.reset();
  }
}
