// Copyright 2026, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import BetaDecayFluent from './BetaDecayFluent.js';
import './common/BetaDecayQueryParameters.js';
import BDDecayRateScreen from './decay-rates/BDDecayRateScreen.js';
import BDMultipleAtomsScreen from './multiple-atoms/BDMultipleAtomsScreen.js';
import BDSingleAtomScreen from './single-atom/BDSingleAtomScreen.js';

// Launch the sim. Beware that scenery Image nodes created outside simLauncher.launch() will have zero bounds
// until the images are fully loaded. See https://github.com/phetsims/coulombs-law/issues/70#issuecomment-429037461
simLauncher.launch( () => {

  const titleStringProperty = BetaDecayFluent[ 'beta-decay' ].titleStringProperty;

  const screens = [
    new BDSingleAtomScreen( { tandem: Tandem.ROOT.createTandem( 'singleAtomScreen' ) } ),
    new BDMultipleAtomsScreen( { tandem: Tandem.ROOT.createTandem( 'multipleAtomsScreen' ) } ),
    new BDDecayRateScreen( { tandem: Tandem.ROOT.createTandem( 'decayRateScreen' ) } )
  ];

  const options: SimOptions = {

    // TODO fill in credits, all of these fields are optional, see joist.CreditsNode https://github.com/phetsims/beta-decay/issues/1
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
