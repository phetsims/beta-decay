// Copyright 2026, University of Colorado Boulder

/**
 * The Screen for Single Atom Decay.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize, { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import BetaDecayColors from '../common/BetaDecayColors.js';
import betaDecay from '../betaDecay.js';
import BetaDecayFluent from '../BetaDecayFluent.js';
import SingleAtomModel from './model/SingleAtomModel.js';
import SingleAtomScreenView from './view/SingleAtomScreenView.js';

type SelfOptions = EmptySelfOptions;

type BetaDecayScreenOptions = SelfOptions & ScreenOptions;

export default class SingleAtomScreen extends Screen<SingleAtomModel, SingleAtomScreenView> {

  public constructor( providedOptions: BetaDecayScreenOptions ) {

    const options = optionize<BetaDecayScreenOptions, SelfOptions, ScreenOptions>()( {
      name: BetaDecayFluent.screen.singleAtomStringProperty,
      backgroundColorProperty: BetaDecayColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new SingleAtomModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new SingleAtomScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

betaDecay.register( 'SingleAtomScreen', SingleAtomScreen );