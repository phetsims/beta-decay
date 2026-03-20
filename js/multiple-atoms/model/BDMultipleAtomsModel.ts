// Copyright 2026, University of Colorado Boulder

/**
 * MultipleAtomsModel handles the state and behavior of the Multiple Atoms screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import { NuclearDecayModelOptions } from '../../../../nuclear-decay-common/js/model/NuclearDecayModel.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import BetaDecayModel from '../../common/model/BetaDecayModel.js';

type SelfOptions = EmptySelfOptions;

type BDMultipleAtomsModelOptions = SelfOptions & NuclearDecayModelOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class BDMultipleAtomsModel extends BetaDecayModel {

  public constructor( providedOptions: BDMultipleAtomsModelOptions ) {
    const options = optionize<BDMultipleAtomsModelOptions, SelfOptions, NuclearDecayModelOptions>()( {
    }, providedOptions );

    super( options );
  }
}
