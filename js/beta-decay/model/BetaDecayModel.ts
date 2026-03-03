// Copyright 2026, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import TModel from '../../../../joist/js/TModel.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import betaDecay from '../../betaDecay.js';

type SelfOptions = {
  //TODO add options that are specific to BetaDecayModel here
};

type BetaDecayModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class BetaDecayModel implements TModel {

  public constructor( providedOptions: BetaDecayModelOptions ) {
    //TODO
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO
  }
}

betaDecay.register( 'BetaDecayModel', BetaDecayModel );