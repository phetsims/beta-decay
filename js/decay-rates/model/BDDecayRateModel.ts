// Copyright 2026, University of Colorado Boulder

/**
 * DecayRateModel handles the state and behavior of the Decay Rates screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import DecayRateModel, { DecayRateModelOptions } from '../../../../nuclear-decay-common/js/model/DecayRateModel.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BetaDecayConstants from '../../common/BetaDecayConstants.js';

type SelfOptions = EmptySelfOptions;

type BDDecayRateModelOptions = SelfOptions & DecayRateModelOptions;

export default class BDDecayRateModel extends DecayRateModel {

  public constructor( providedOptions: BDDecayRateModelOptions ) {
    const options = optionize<BDDecayRateModelOptions, SelfOptions, DecayRateModelOptions>()( {
    }, providedOptions );

    super( BetaDecayConstants.SELECTABLE_ISOTOPES, options );

    this.selectedIsotopeProperty.value = 'hydrogen-3';
  }
}
