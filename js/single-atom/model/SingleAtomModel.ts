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
import betaDecay from '../../betaDecay.js';

type SelfOptions = EmptySelfOptions;

type BetaDecayModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class SingleAtomModel extends NuclearDecayModel {

  public constructor( providedOptions: BetaDecayModelOptions ) {
    super( providedOptions );
    // TO BE IMPLEMENTED
  }
}

betaDecay.register( 'SingleAtomModel', SingleAtomModel );