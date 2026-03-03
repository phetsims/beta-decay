// Copyright 2026, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import optionize from '../../../../phet-core/js/optionize.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import BetaDecayConstants from '../../common/BetaDecayConstants.js';
import betaDecay from '../../betaDecay.js';
import BetaDecayModel from '../model/BetaDecayModel.js';

type SelfOptions = {
 //TODO add options that are specific to BetaDecayScreenView here
};

type BetaDecayScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class BetaDecayScreenView extends ScreenView {

  public constructor( model: BetaDecayModel, providedOptions: BetaDecayScreenViewOptions ) {

    const options = optionize<BetaDecayScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenViewOptions here
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
    //TODO
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //TODO
  }
}

betaDecay.register( 'BetaDecayScreenView', BetaDecayScreenView );