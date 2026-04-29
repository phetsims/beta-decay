// Copyright 2026, University of Colorado Boulder

/**
 * MultipleAtomsScreenView is responsible for the visual representation of the Multiple Atoms Screen in the Beta Decay simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import MultipleAtomsScreenView, { MultipleAtomsScreenViewOptions } from '../../../../nuclear-decay-common/js/multiple-atoms/view/MultipleAtomsScreenView.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import BDMultipleAtomsModel from '../model/BDMultipleAtomsModel.js';

type SelfOptions = EmptySelfOptions;

type BDMultipleAtomsScreenViewOptions = SelfOptions & MultipleAtomsScreenViewOptions;

export default class BDMultipleAtomsScreenView extends MultipleAtomsScreenView {

  public constructor( model: BDMultipleAtomsModel, providedOptions: BDMultipleAtomsScreenViewOptions ) {

    const options = optionize<BDMultipleAtomsScreenViewOptions, SelfOptions, MultipleAtomsScreenViewOptions>()( {
    }, providedOptions );

    super( model, options );
  }
}
