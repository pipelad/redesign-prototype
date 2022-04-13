import React, { useState, useRef, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/ui/Header';
import Home from './components/pages/Home';
import OfertaAcademica from './components/pages/OfertaAcademica';
import Dependencias from './components/pages/Dependencias';
import RecursosUniversitarios from './components/pages/RecursosUniversitarios';
import Footer from './components/ui/Footer';

function App() {
	const [stickyMenu, setStickyMenu] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if(window.pageYOffset > 30) {
				setStickyMenu(true);
			} 
			if(window.pageYOffset < 30) {
				setStickyMenu(false);
			}
		};
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
	}, [])

	const stickyClass = stickyMenu ? 'stiked sombra' : '';

  	return (
    	<React.Fragment>
    		<Header style={stickyClass} />
    		<div className="mainwrapper">
    			<Switch>
    				<Route path="/profesionales" exact>
    					<OfertaAcademica tipo='profesionales' />
    				</Route >
    				<Route path="/posgrados" exact>
    					<OfertaAcademica tipo='posgrado' />
    				</Route >
    				<Route path="/virtuales" exact>
    					<OfertaAcademica tipo='Virtual' />
    				</Route >
    				<Route path="/recursos" exact>
    					<RecursosUniversitarios />
    				</Route>
    				<Route path="/dependencias" exact>
    					<Dependencias />
    				</Route>
	    			<Route path="/">
	    				<Home />
	    			</Route>
	    			<Route path="*">
	    				<h2> Página no encontrada 404</h2>
	    			</Route>
	    		</Switch>
    		</div>
    		<Footer />
    	</React.Fragment>
  	);
}

export default App;
