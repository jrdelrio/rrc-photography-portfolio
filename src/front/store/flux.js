const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			language: "es",
			showResponsiveNavbar: false
		},

		actions: {
			addFavorite: (item) => {
				const store = getStore();
				setStore({favorites: [...store.favorites, item]});
				console.log(`Added to favorites: ${item}!`);
			},
			
			changeLanguage: (newLanguage) => {
				const store = getStore();
				setStore({language: newLanguage});
				console.log(`Language changed to: ${newLanguage}`);
			},

			ShowResponsiveNavbar: () => {
				const store = getStore();
				if (store.showResponsiveNavbar) {
					setStore({showResponsiveNavbar: false});
					console.log('cerrando navbar secundario')
				}
				else {
					setStore({showResponsiveNavbar: true});
					console.log('abriendo navbar secundario')
				}
			}
		}
	};
};

export default getState;