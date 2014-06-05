
modulejs.define('core/resource', ['_', 'config', 'core/settings'], function (_, config, settings) {

	var imagesHref = settings.appHref + 'client/images/',
		fallbackHref = settings.appHref + 'client/images/fallback/',
		themesHref = settings.appHref + 'client/themes/',
		fallbacks = ['file', 'folder', 'folder-page', 'folder-parent', 'ar', 'aud', 'bin', 'img', 'txt', 'vid'],

		image = function (id) {

			return imagesHref + id + '.svg';
		},

		icon = function (id) {

			var baseId = id.split('-')[0],
				href = config.theme[id] || config.theme[baseId];

			if (href) {
				return themesHref + href;
			}

			if (_.indexOf(fallbacks, id) >= 0) {
				return fallbackHref + id + '.svg';
			}

			if (_.indexOf(fallbacks, baseId) >= 0) {
				return fallbackHref + baseId + '.svg';
			}

			return fallbackHref + 'file.svg';
		};

	return {
		image: image,
		icon: icon
	};
});
