import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const configData = require('./config/Config.json');
const constant = require('./config/Constants.json');

configure({ adapter: new Adapter() });

global.CONFIG = configData;
global.CONSTANT = constant;