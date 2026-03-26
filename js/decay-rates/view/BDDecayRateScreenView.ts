// Copyright 2026, University of Colorado Boulder

/**
 * DecayRateScreenView is responsible for the visual representation of the Decay Rates Screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BetaDecayScreenView, { BetaDecayScreenViewOptions } from '../../common/view/BetaDecayScreenView.js';
import BDDecayRateModel from '../model/BDDecayRateModel.js';

type SelfOptions = EmptySelfOptions;

type BDDecayRateScreenViewOptions = SelfOptions & BetaDecayScreenViewOptions;

export default class BDDecayRateScreenView extends BetaDecayScreenView {

  public constructor( model: BDDecayRateModel, providedOptions: BDDecayRateScreenViewOptions ) {

    const options = optionize<BDDecayRateScreenViewOptions, SelfOptions, BetaDecayScreenViewOptions>()( {
    }, providedOptions );

    super( model, options );
  }
}
