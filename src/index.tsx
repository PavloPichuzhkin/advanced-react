// import bar from './bar';
// bar();
import { createRoot } from 'react-dom/client';
import {Test} from "./pages/Test";

const domNode = document.getElementById('root');

const root = createRoot(domNode );
const defaultCount="5"
root.render( <Test defaultCount={defaultCount } />);

//TODO test toto webstorm
