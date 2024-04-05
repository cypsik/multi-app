tsParticles.load({
	id: 'particles',
	options: {
		particles: {
			number: {
				value: 80,
				density: {
					enable: true,
					area: 800,
				},
			},
			color: {
				value: '#fff'
			},
			shape: {
				type: 'circle',
			},
			opacity: {
				value: 1,
			},
			size: {
				value: 2,
			},
			links: {
				enable: true,
				distance: 150,
				color: '#808080',
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: true,
				speed: 1,
				direction: 'none',
				random: false,
				straight: false,
				outModes: 'out',
			},
		},
		interactivity: {
			events: {
				onHover: {
					enable: true,
					mode: 'repulse',
				},
				onClick: {
					enable: true,
					mode: 'push',
				},
			},
			modes: {
				grab: {
					distance: 140,
					links: {
						opacity: 1,
					},
				},
				push: {
					quantity: 4,
				},
			},
		},
    	background: {
      		color: "#0c0e11"
    	},
    	zIndex: {
			value: 0
		}
	},
});
