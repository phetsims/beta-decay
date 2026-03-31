// Copyright 2026, University of Colorado Boulder
/**
 * Model for Beta Decay, which extends the base NuclearDecayModel with any specific functionality needed for beta decay.
 *
 * @author Agustín Vallejo
 */

import NuclearDecayModel, { NuclearDecayModelOptions } from '../../../../nuclear-decay-common/js/model/NuclearDecayModel.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import Tandem from '../../../../tandem/js/Tandem.js';

type SelfOptions = EmptySelfOptions;

// Selectable isotopes in beta-decay
export const BDSelectableIsotopesValues = [ 'custom', 'hydrogen-3', 'carbon-14' ] as const;
export type BDSelectableIsotopes = ( typeof BDSelectableIsotopesValues )[ number ];

export type BetaDecayModelOptions = SelfOptions & NuclearDecayModelOptions;

export default class BetaDecayModel extends NuclearDecayModel {

  public override readonly selectableIsotopes: BDSelectableIsotopes[];

  public constructor( providedOptions: BetaDecayModelOptions ) {
    const options = optionize<SelfOptions, EmptySelfOptions, BetaDecayModelOptions>()( {
      tandem: Tandem.REQUIRED
    }, providedOptions );

    super( options );

    this.selectableIsotopes = [ ...BDSelectableIsotopesValues ];
  }
}
