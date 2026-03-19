// Copyright 2026, University of Colorado Boulder

/**
 * The Screen for Multiple Atoms Decay.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize, { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import BetaDecayFluent from '../BetaDecayFluent.js';
import BetaDecayColors from '../common/BetaDecayColors.js';
import BDMultipleAtomsModel from './model/BDMultipleAtomsModel.js';
import BDMultipleAtomsScreenView from './view/BDMultipleAtomsScreenView.js';

type SelfOptions = EmptySelfOptions;

type BetaDecayScreenOptions = SelfOptions & ScreenOptions;

export default class BDMultipleAtomsScreen extends Screen<BDMultipleAtomsModel, BDMultipleAtomsScreenView> {

  public constructor( providedOptions: BetaDecayScreenOptions ) {

    const options = optionize<BetaDecayScreenOptions, SelfOptions, ScreenOptions>()( {
      name: BetaDecayFluent.screen.multipleAtomsStringProperty,
      backgroundColorProperty: BetaDecayColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new BDMultipleAtomsModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new BDMultipleAtomsScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}
