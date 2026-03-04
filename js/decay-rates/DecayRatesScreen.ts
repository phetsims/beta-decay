// Copyright 2026, University of Colorado Boulder

/**
 * The Screen for Decay Rates.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize, { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import BetaDecayColors from '../common/BetaDecayColors.js';
import betaDecay from '../betaDecay.js';
import BetaDecayFluent from '../BetaDecayFluent.js';
import DecayRatesModel from './model/DecayRatesModel.js';
import DecayRatesScreenView from './view/DecayRatesScreenView.js';

type SelfOptions = EmptySelfOptions;

type BetaDecayScreenOptions = SelfOptions & ScreenOptions;

export default class DecayRatesScreen extends Screen<DecayRatesModel, DecayRatesScreenView> {

  public constructor( providedOptions: BetaDecayScreenOptions ) {

    const options = optionize<BetaDecayScreenOptions, SelfOptions, ScreenOptions>()( {
      name: BetaDecayFluent.screen.decayRatesStringProperty,
      backgroundColorProperty: BetaDecayColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new DecayRatesModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new DecayRatesScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

betaDecay.register( 'DecayRatesScreen', DecayRatesScreen );