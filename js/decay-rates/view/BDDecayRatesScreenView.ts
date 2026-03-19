// Copyright 2026, University of Colorado Boulder

/**
 * DecayRatesScreenView is responsible for the visual representation of the Decay Rates Screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import NuclearDecayScreenView, { NuclearDecayScreenViewOptions } from '../../../../nuclear-decay-common/js/view/NuclearDecayScreenView.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BDDecayRatesModel from '../model/BDDecayRatesModel.js';

type SelfOptions = EmptySelfOptions;

type BDDecayRatesScreenViewOptions = SelfOptions & NuclearDecayScreenViewOptions;

export default class BDDecayRatesScreenView extends NuclearDecayScreenView {

  public constructor( model: BDDecayRatesModel, providedOptions: BDDecayRatesScreenViewOptions ) {

    const options = optionize<BDDecayRatesScreenViewOptions, SelfOptions, NuclearDecayScreenViewOptions>()( {
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
