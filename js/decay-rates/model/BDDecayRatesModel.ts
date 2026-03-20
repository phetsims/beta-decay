// Copyright 2026, University of Colorado Boulder

/**
 * DecayRatesModel handles the state and behavior of the Decay Rates screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import { NuclearDecayModelOptions } from '../../../../nuclear-decay-common/js/model/NuclearDecayModel.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import BetaDecayModel from '../../common/model/BetaDecayModel.js';

type SelfOptions = EmptySelfOptions;

type BDDecayRatesModelOptions = SelfOptions & NuclearDecayModelOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class BDDecayRatesModel extends BetaDecayModel {

  public constructor( providedOptions: BDDecayRatesModelOptions ) {
    const options = optionize<BDDecayRatesModelOptions, SelfOptions, NuclearDecayModelOptions>()( {
    }, providedOptions );

    super( options );
  }
}
