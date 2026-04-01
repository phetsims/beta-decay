// Copyright 2026, University of Colorado Boulder

/**
 * MultipleAtomsScreenView is responsible for the visual representation of the Multiple Atoms Screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BetaDecayScreenView, { BetaDecayScreenViewOptions } from '../../common/view/BetaDecayScreenView.js';
import BDMultipleAtomsModel from '../model/BDMultipleAtomsModel.js';

type SelfOptions = EmptySelfOptions;

type BDMultipleAtomsScreenViewOptions = SelfOptions & BetaDecayScreenViewOptions;

export default class BDMultipleAtomsScreenView extends BetaDecayScreenView {

  public constructor( model: BDMultipleAtomsModel, providedOptions: BDMultipleAtomsScreenViewOptions ) {

    const options = optionize<BDMultipleAtomsScreenViewOptions, SelfOptions, BetaDecayScreenViewOptions>()( {
    }, providedOptions );

    super( model, options );
  }
}
