// Copyright 2026, University of Colorado Boulder

/**
 * Single Atom Model handles the state and behavior of a single atom in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import { NuclearDecayModelOptions } from '../../../../nuclear-decay-common/js/model/NuclearDecayModel.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BetaDecayModel, { BetaDecayModelOptions } from '../../common/model/BetaDecayModel.js';

type SelfOptions = EmptySelfOptions;

type BDSingleAtomModelOptions = SelfOptions & BetaDecayModelOptions;

export default class BDSingleAtomModel extends BetaDecayModel {

  public constructor( providedOptions: BDSingleAtomModelOptions ) {
    const options = optionize<BDSingleAtomModelOptions, SelfOptions, NuclearDecayModelOptions>()( {
      maxNumberOfAtoms: 1
    }, providedOptions );

    super( options );
  }
}
