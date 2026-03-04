// Copyright 2026, University of Colorado Boulder

/**
 * MultipleAtomsScreenView is responsible for the visual representation of the Multiple Atoms Screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import BetaDecayConstants from '../../common/BetaDecayConstants.js';
import betaDecay from '../../betaDecay.js';
import MultipleAtomsModel from '../model/MultipleAtomsModel.js';

type SelfOptions = EmptySelfOptions;

type BetaDecayScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class MultipleAtomsScreenView extends ScreenView {

  public constructor( model: MultipleAtomsModel, providedOptions: BetaDecayScreenViewOptions ) {

    const options = optionize<BetaDecayScreenViewOptions, SelfOptions, ScreenViewOptions>()( {
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - BetaDecayConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - BetaDecayConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    // TO BE IMPLEMENTED
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    // TO BE IMPLEMENTED
  }
}

betaDecay.register( 'MultipleAtomsScreenView', MultipleAtomsScreenView );