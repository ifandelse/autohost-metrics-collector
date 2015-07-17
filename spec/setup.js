var chai = require( "chai" );
chai.use( require( "chai-as-promised" ) );
global.should = chai.should();
global.expect = chai.expect;
global.assert = chai.assert;
global._ = require( "lodash" );
global.fs = require( "fs" );
global.sinon = require( "sinon" );
global.when = require( "when" );
global.lift = require( "when/node" ).lift;
var os = require( "os" );
global.hostName = os.hostname();
