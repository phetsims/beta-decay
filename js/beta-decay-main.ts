// Copyright 2026, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import BetaDecayScreen from './beta-decay/BetaDecayScreen.js';
import BetaDecayFluent from './BetaDecayFluent.js';
import './common/BetaDecayQueryParameters.js';

// Launch the sim. Beware that scenery Image nodes created outside simLauncher.launch() will have zero bounds
// until the images are fully loaded. See https://github.com/phetsims/coulombs-law/issues/70#issuecomment-429037461
simLauncher.launch( () => {

  const titleStringProperty = BetaDecayFluent[ 'beta-decay' ].titleStringProperty;

  const screens = [
    new BetaDecayScreen( { tandem: Tandem.ROOT.createTandem( 'betaDecayScreen' ) } )
  ];

  const options: SimOptions = {

    //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
    credits: {
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      contributors: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
  };

  const sim = new Sim( titleStringProperty, screens, options );
  sim.start();
} );