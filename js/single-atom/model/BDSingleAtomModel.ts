// Copyright 2026, University of Colorado Boulder

/**
 * Single Atom Model handles the state and behavior of a single atom in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import { NuclearDecayModelOptions } from '../../../../nuclear-decay-common/js/model/NuclearDecayModel.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import BetaDecayModel from '../../common/model/BetaDecayModel.js';

type SelfOptions = EmptySelfOptions;

type BDSingleAtomModelOptions = SelfOptions & NuclearDecayModelOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class BDSingleAtomModel extends BetaDecayModel {

  public constructor( providedOptions: BDSingleAtomModelOptions ) {
    const options = optionize<BDSingleAtomModelOptions, SelfOptions, NuclearDecayModelOptions>()( {
    }, providedOptions );

    super( options );
  }
}
