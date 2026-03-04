// Copyright 2026, University of Colorado Boulder

/**
 * MultipleAtomsModel handles the state and behavior of the Multiple Atoms screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import TModel from '../../../../joist/js/TModel.js';
import { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import betaDecay from '../../betaDecay.js';

type SelfOptions = EmptySelfOptions;

type BetaDecayModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class MultipleAtomsModel implements TModel {

  public constructor( providedOptions: BetaDecayModelOptions ) {
    // TO BE IMPLEMENTED
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    // TO BE IMPLEMENTED
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    // TO BE IMPLEMENTED
  }
}

betaDecay.register( 'MultipleAtomsModel', MultipleAtomsModel );