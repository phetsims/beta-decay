// Copyright 2026, University of Colorado Boulder

/**
 * Defines query parameters that are specific to this simulation.
 * Run with ?log to print query parameters and their values to the browser console at startup.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import logGlobal from '../../../phet-core/js/logGlobal.js';
import { QueryStringMachine } from '../../../query-string-machine/js/QueryStringMachineModule.js';

const BetaDecayQueryParameters = QueryStringMachine.getAll( {
  //TODO add schemas for query parameters https://github.com/phetsims/beta-decay/issues/1
} );

// Log query parameters
logGlobal( 'phet.chipper.queryParameters' );
logGlobal( 'phet.preloads.phetio.queryParameters' );
phet.log && phet.log( `BetaDecayQueryParameters: ${JSON.stringify( BetaDecayQueryParameters, null, 2 )}` );

export default BetaDecayQueryParameters;
