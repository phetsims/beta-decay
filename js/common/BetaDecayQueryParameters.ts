// Copyright 2026, University of Colorado Boulder

/**
 * Defines query parameters that are specific to this simulation.
 * Run with ?log to print query parameters and their values to the browser console at startup.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import logGlobal from '../../../phet-core/js/logGlobal.js';
import { QueryStringMachine } from '../../../query-string-machine/js/QueryStringMachineModule.js';
import betaDecay from '../betaDecay.js';

const BetaDecayQueryParameters = QueryStringMachine.getAll( {
  //TODO add schemas for query parameters
} );

betaDecay.register( 'BetaDecayQueryParameters', BetaDecayQueryParameters );

// Log query parameters
logGlobal( 'phet.chipper.queryParameters' );
logGlobal( 'phet.preloads.phetio.queryParameters' );
logGlobal( 'phet.betaDecay.BetaDecayQueryParameters' );

export default BetaDecayQueryParameters;