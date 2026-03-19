// Copyright 2026, University of Colorado Boulder

/**
 * The Screen for Decay Rates.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize, { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import BetaDecayFluent from '../BetaDecayFluent.js';
import BetaDecayColors from '../common/BetaDecayColors.js';
import BDDecayRatesModel from './model/BDDecayRatesModel.js';
import BDDecayRatesScreenView from './view/BDDecayRatesScreenView.js';

type SelfOptions = EmptySelfOptions;

type BetaDecayScreenOptions = SelfOptions & ScreenOptions;

export default class BDDecayRatesScreen extends Screen<BDDecayRatesModel, BDDecayRatesScreenView> {

  public constructor( providedOptions: BetaDecayScreenOptions ) {

    const options = optionize<BetaDecayScreenOptions, SelfOptions, ScreenOptions>()( {
      name: BetaDecayFluent.screen.decayRatesStringProperty,
      backgroundColorProperty: BetaDecayColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new BDDecayRatesModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new BDDecayRatesScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}
