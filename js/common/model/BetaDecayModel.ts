// Copyright 2026, University of Colorado Boulder
/**
 * Model for Beta Decay, which extends the base NuclearDecayModel with any specific functionality needed for beta decay.
 *
 * @author Agustín Vallejo
 */

import Property from '../../../../axon/js/Property.js';
import NuclearDecayModel, { BDSelectableIsotopes, BDSelectableIsotopesValues, NuclearDecayModelOptions } from '../../../../nuclear-decay-common/js/model/NuclearDecayModel.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';

type SelfOptions = EmptySelfOptions;

export type BetaDecayModelOptions = SelfOptions & NuclearDecayModelOptions;

export default class BetaDecayModel extends NuclearDecayModel<BDSelectableIsotopes> {

  public override readonly selectableIsotopes: BDSelectableIsotopes[];

  public override readonly selectedIsotopeProperty: Property<BDSelectableIsotopes>;

  public constructor( providedOptions: BetaDecayModelOptions ) {
    const options = optionize<SelfOptions, EmptySelfOptions, BetaDecayModelOptions>()( {
      // Default options go here
    }, providedOptions );

    super( options );

    this.selectableIsotopes = [ ...BDSelectableIsotopesValues ];

    this.selectedIsotopeProperty = new Property<BDSelectableIsotopes>( 'hydrogen-3' );
  }
}
