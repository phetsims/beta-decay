// Copyright 2026, University of Colorado Boulder

/**
 * Single Atom Model handles the state and behavior of a single atom in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import NuclearDecayModel from '../../../../nuclear-decay-common/js/model/NuclearDecayModel.js';
import { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';

type SelfOptions = EmptySelfOptions;

type BDSingleAtomModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class BDSingleAtomModel extends NuclearDecayModel {

  public constructor( providedOptions: BDSingleAtomModelOptions ) {
    super( providedOptions );
    // TO BE IMPLEMENTED
  }
}
