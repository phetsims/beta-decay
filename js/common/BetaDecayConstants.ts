// Copyright 2026, University of Colorado Boulder

/**
 * BetaDecayConstants is the set of constants used throughout the 'Beta Decay' simulation.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

// Selectable isotopes in beta-decay
const BDStartingIsotopesValues = [ 'custom', 'hydrogen-3', 'carbon-14' ] as const;
export type BDStartingIsotopes = ( typeof BDStartingIsotopesValues )[ number ];

export default class BetaDecayConstants {

  private constructor() {
    // Not intended for instantiation.
  }

  public static readonly SCREEN_VIEW_X_MARGIN = 15;
  public static readonly SCREEN_VIEW_Y_MARGIN = 15;

  public static readonly SELECTABLE_ISOTOPES = [ ...BDStartingIsotopesValues ];
}
