// Copyright 2026, University of Colorado Boulder

/**
 * DecayRateModel handles the state and behavior of the Decay Rates screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import { NuclearDecayModelOptions } from '../../../../nuclear-decay-common/js/model/NuclearDecayModel.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BetaDecayModel, { BetaDecayModelOptions } from '../../common/model/BetaDecayModel.js';

type SelfOptions = EmptySelfOptions;

type BDDecayRateModelOptions = SelfOptions & BetaDecayModelOptions;

export default class BDDecayRateModel extends BetaDecayModel {

  public constructor( providedOptions: BDDecayRateModelOptions ) {
    const options = optionize<BDDecayRateModelOptions, SelfOptions, NuclearDecayModelOptions>()( {
    }, providedOptions );

    super( options );
  }
}
