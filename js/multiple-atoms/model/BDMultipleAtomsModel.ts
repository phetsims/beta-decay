// Copyright 2026, University of Colorado Boulder

/**
 * MultipleAtomsModel handles the state and behavior of the Multiple Atoms screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import NuclearDecayModel from '../../../../nuclear-decay-common/js/model/NuclearDecayModel.js';
import { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';

type SelfOptions = EmptySelfOptions;

type BDMultipleAtomsModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class BDMultipleAtomsModel extends NuclearDecayModel {

  public constructor( providedOptions: BDMultipleAtomsModelOptions ) {
    super( providedOptions );
    // TO BE IMPLEMENTED
  }
}
