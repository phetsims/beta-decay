// Copyright 2026, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import BetaDecayColors from '../common/BetaDecayColors.js';
import betaDecay from '../betaDecay.js';
import BetaDecayFluent from '../BetaDecayFluent.js';
import BetaDecayModel from './model/BetaDecayModel.js';
import BetaDecayScreenView from './view/BetaDecayScreenView.js';

type SelfOptions = {
  //TODO add options that are specific to BetaDecayScreen here
};

type BetaDecayScreenOptions = SelfOptions & ScreenOptions;

export default class BetaDecayScreen extends Screen<BetaDecayModel, BetaDecayScreenView> {

  public constructor( providedOptions: BetaDecayScreenOptions ) {

    const options = optionize<BetaDecayScreenOptions, SelfOptions, ScreenOptions>()( {
      name: BetaDecayFluent.screen.nameStringProperty,

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenOptions here
      backgroundColorProperty: BetaDecayColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new BetaDecayModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new BetaDecayScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

betaDecay.register( 'BetaDecayScreen', BetaDecayScreen );