

import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom'

import "./App.scss";
import Homepage from './pages/Homepage'
import MiniMinecraft from './pages/project-pages/MiniMinecraft';
import ProceduralTree from './pages/project-pages/ProceduralTree';
import ProjectHub from './pages/project-pages/ProjectHub';
import Klaus from './pages/project-pages/Klaus';
import TinyTavern from './pages/project-pages/TinyTavern';
import MiniMaya from './pages/project-pages/MiniMaya';
import ShaderFun from './pages/project-pages/ShaderFun';
import Treble from './pages/project-pages/Treble'
import ProceduralTerrariums from './pages/project-pages/ProceduralTerrariums';
import ProceduralMinka from './pages/project-pages/ProceduralMinka';

import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'

import * as loading from './images/yellow-loader.json'
import * as check from './images/yellow-check.json'

import ScrollToTop from './scrollToTop';

const loadingOptions = {
	loop: true,
	autoplay: true,
	animationData: loading.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

const checkOptions = {
	loop: true,
	autoplay: true,
	animationData: check.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

function App() {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(undefined);
	const [completed, setCompleted] = useState(undefined);

	useEffect(() => {
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then((response) => response.json())
				.then((json) => {
					console.log(json);
					setData(json);
					setLoading(true);

					setTimeout(() => {
						setCompleted(true);
					}, 800);
				});
		}, 3000);
	}, [])

	return (
		<div className="App">
			{!completed ? (
				<>
					{!loading ? (
						<Lottie options={loadingOptions} height={200} width={200} />
					) : (
						<Lottie options={checkOptions} height={200} width={200} />
					)}
				</>
				
			) : (
				<Router>
					<ScrollToTop></ScrollToTop>
					<Routes>
						<Route exact path="/" element={<Homepage />} />
						<Route exact path="/projects" element={<ProjectHub />} />
						<Route exact path="/project/mini-minecraft" element={<MiniMinecraft />} />
						<Route exact path="/project/procedural-orange-tree" element={<ProceduralTree />} />
						<Route exact path="/project/klaus" element={<Klaus />} />
						<Route exact path="/project/tiny-tavern" element={<TinyTavern />} />
						<Route exact path="/project/mini-maya" element={<MiniMaya />} />
						<Route exact path="/project/ShaderFun/shader-fun" element={<ShaderFun />} />
						<Route exact path="/project/treble" element={<Treble />} />
						<Route exact path="/project/procedural-terrariums" element={<ProceduralTerrariums />} />
						<Route exact path="/project/minka-generator" element={<ProceduralMinka />} />
					</Routes>
				</Router>
			)}
		</div>
	)

}

export default App;
