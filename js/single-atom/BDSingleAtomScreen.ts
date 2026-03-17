// Copyright 2026, University of Colorado Boulder

/**
 * The Screen for Single Atom Decay.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize, { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import betaDecay from '../betaDecay.js';
import BetaDecayFluent from '../BetaDecayFluent.js';
import BetaDecayColors from '../common/BetaDecayColors.js';
import BDSingleAtomModel from './model/BDSingleAtomModel.js';
import BDSingleAtomScreenView from './view/BDSingleAtomScreenView.js';

type SelfOptions = EmptySelfOptions;

type BetaDecayScreenOptions = SelfOptions & ScreenOptions;

export default class BDSingleAtomScreen extends Screen<BDSingleAtomModel, BDSingleAtomScreenView> {

  public constructor( providedOptions: BetaDecayScreenOptions ) {

    const options = optionize<BetaDecayScreenOptions, SelfOptions, ScreenOptions>()( {
      name: BetaDecayFluent.screen.singleAtomStringProperty,
      backgroundColorProperty: BetaDecayColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new BDSingleAtomModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new BDSingleAtomScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

betaDecay.register( 'BDSingleAtomScreen', BDSingleAtomScreen );