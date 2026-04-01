// Copyright 2026, University of Colorado Boulder

/**
 * SingleAtomScreenView is responsible for the visual representation of the Single Atom Screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BetaDecayScreenView, { BetaDecayScreenViewOptions } from '../../common/view/BetaDecayScreenView.js';
import BDSingleAtomModel from '../model/BDSingleAtomModel.js';

type SelfOptions = EmptySelfOptions;

type BDSingleAtomScreenViewOptions = SelfOptions & BetaDecayScreenViewOptions;

export default class BDSingleAtomScreenView extends BetaDecayScreenView {

  public constructor( model: BDSingleAtomModel, providedOptions: BDSingleAtomScreenViewOptions ) {

    const options = optionize<BDSingleAtomScreenViewOptions, SelfOptions, BetaDecayScreenViewOptions>()( {
    }, providedOptions );

    super( model, options );
  }
}
