hs.graphicsDir = 'highslide/graphics/';
hs.outlineType = 'custom';
hs.captionEval = 'this.a.title';

// hs slide for about page below //
hs.graphicsDir = 'highslide/graphics/';
hs.outlineType = 'custom';
hs.fadeInOut = true;
hs.align = 'center';
hs.captionEval = 'this.a.title';


// Add the slideshow controller
hs.addSlideshow({
	slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	fixedControls: 'fit',
	overlayOptions: {
		opacity: 0.75,
		position: 'bottom center',
		offsetX: 0,
		offsetY: -15,
		hideOnMouseOut: true
	}
});

// gallery config object
var config1 = {
	slideshowGroup: 'group1',
	transitions: ['expand', 'crossfade']
};


// hs slide for about page above//
