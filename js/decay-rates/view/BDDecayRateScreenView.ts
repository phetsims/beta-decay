// Copyright 2026, University of Colorado Boulder

/**
 * DecayRateScreenView is responsible for the visual representation of the Decay Rates Screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import DecayRateScreenView, { DecayRateScreenViewOptions } from '../../../../nuclear-decay-common/js/decay-rate/view/DecayRateScreenView.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BDDecayRateModel from '../model/BDDecayRateModel.js';

type SelfOptions = EmptySelfOptions;

type BDDecayRateScreenViewOptions = SelfOptions & DecayRateScreenViewOptions;

export default class BDDecayRateScreenView extends DecayRateScreenView {

  public constructor( model: BDDecayRateModel, providedOptions: BDDecayRateScreenViewOptions ) {

    const options = optionize<BDDecayRateScreenViewOptions, SelfOptions, DecayRateScreenViewOptions>()( {
    }, providedOptions );

    super( model, options );
  }
}
