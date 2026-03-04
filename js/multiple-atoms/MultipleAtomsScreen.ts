// Copyright 2026, University of Colorado Boulder

/**
 * The Screen for Multiple Atoms Decay.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize, { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import BetaDecayColors from '../common/BetaDecayColors.js';
import betaDecay from '../betaDecay.js';
import BetaDecayFluent from '../BetaDecayFluent.js';
import MultipleAtomsModel from './model/MultipleAtomsModel.js';
import MultipleAtomsScreenView from './view/MultipleAtomsScreenView.js';

type SelfOptions = EmptySelfOptions;

type BetaDecayScreenOptions = SelfOptions & ScreenOptions;

export default class MultipleAtomsScreen extends Screen<MultipleAtomsModel, MultipleAtomsScreenView> {

  public constructor( providedOptions: BetaDecayScreenOptions ) {

    const options = optionize<BetaDecayScreenOptions, SelfOptions, ScreenOptions>()( {
      name: BetaDecayFluent.screen.multipleAtomsStringProperty,
      backgroundColorProperty: BetaDecayColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new MultipleAtomsModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new MultipleAtomsScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

betaDecay.register( 'MultipleAtomsScreen', MultipleAtomsScreen );