import refs from './js/refs'
import {startSwitchOnClick, stopSwitchOnClick} from './js/fn'

refs.start.addEventListener('click', startSwitchOnClick);
refs.stop.addEventListener('click', stopSwitchOnClick);