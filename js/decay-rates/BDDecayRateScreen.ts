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
import BDDecayRateModel from './model/BDDecayRateModel.js';
import BDDecayRateScreenView from './view/BDDecayRateScreenView.js';

type SelfOptions = EmptySelfOptions;

type BetaDecayScreenOptions = SelfOptions & ScreenOptions;

export default class BDDecayRateScreen extends Screen<BDDecayRateModel, BDDecayRateScreenView> {

  public constructor( providedOptions: BetaDecayScreenOptions ) {

    const options = optionize<BetaDecayScreenOptions, SelfOptions, ScreenOptions>()( {
      name: BetaDecayFluent.screen.decayRateStringProperty,
      backgroundColorProperty: BetaDecayColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new BDDecayRateModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new BDDecayRateScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}
