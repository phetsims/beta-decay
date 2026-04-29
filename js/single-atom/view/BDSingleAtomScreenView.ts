// Copyright 2026, University of Colorado Boulder

/**
 * SingleAtomScreenView is responsible for the visual representation of the Single Atom Screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import SingleAtomScreenView, { SingleAtomScreenViewOptions } from '../../../../nuclear-decay-common/js/single-atom/view/SingleAtomScreenView.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BDSingleAtomModel from '../model/BDSingleAtomModel.js';

type SelfOptions = EmptySelfOptions;

type BDSingleAtomScreenViewOptions = SelfOptions & SingleAtomScreenViewOptions;

export default class BDSingleAtomScreenView extends SingleAtomScreenView {

  public constructor( model: BDSingleAtomModel, providedOptions: BDSingleAtomScreenViewOptions ) {

    const options = optionize<BDSingleAtomScreenViewOptions, SelfOptions, SingleAtomScreenViewOptions>()( {
    }, providedOptions );

    super( model, options );
  }
}
