const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			language: "es",
			showResponsiveNavbar: false,
			showLanguageToggler: true
		},

		actions: {

			addFavorite: (item) => {
				const store = getStore();
				setStore({favorites: [...store.favorites, item]});
				console.log(`Added to favorites: ${item}!`);
			},

			setShowLanguageToggler: (bool) => {
				const store = getStore();
				setStore({showLanguageToggler: bool});
				console.log('cambiado el Show Language Toggler')
			},
			
			changeLanguage: (newLanguage) => {
				const store = getStore();
				setStore({language: newLanguage});
				console.log(`Language changed to: ${newLanguage}`);
			},

			showResponsiveNavbar: () => {
				const store = getStore();
				if (store.showResponsiveNavbar) {
					setStore({showResponsiveNavbar: false});
					console.log('ocultando navbar secundario')
				}
				else {
					setStore({showResponsiveNavbar: true});
					console.log('mostrando navbar secundario')
				}
			}
		}
	};
};

export default getState;