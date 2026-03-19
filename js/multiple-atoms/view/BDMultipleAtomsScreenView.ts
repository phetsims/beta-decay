// Copyright 2026, University of Colorado Boulder

/**
 * MultipleAtomsScreenView is responsible for the visual representation of the Multiple Atoms Screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import NuclearDecayScreenView, { NuclearDecayScreenViewOptions } from '../../../../nuclear-decay-common/js/view/NuclearDecayScreenView.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BDMultipleAtomsModel from '../model/BDMultipleAtomsModel.js';

type SelfOptions = EmptySelfOptions;

type BDMultipleAtomsScreenViewOptions = SelfOptions & NuclearDecayScreenViewOptions;

export default class BDMultipleAtomsScreenView extends NuclearDecayScreenView {

  public constructor( model: BDMultipleAtomsModel, providedOptions: BDMultipleAtomsScreenViewOptions ) {

    const options = optionize<BDMultipleAtomsScreenViewOptions, SelfOptions, NuclearDecayScreenViewOptions>()( {
    }, providedOptions );

    super( model, options );
  }

  /**
   * Resets the view.
   */
  public override reset(): void {
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
