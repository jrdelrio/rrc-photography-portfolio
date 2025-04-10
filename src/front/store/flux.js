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
			},

			setShowLanguageToggler: (bool) => {
				const store = getStore();
				setStore({showLanguageToggler: bool});
			},
			
			changeLanguage: (newLanguage) => {
				const store = getStore();
				setStore({language: newLanguage});
			},

			showResponsiveNavbar: () => {
				const store = getStore();
				if (store.showResponsiveNavbar) {
					setStore({showResponsiveNavbar: false});
				}
				else {
					setStore({showResponsiveNavbar: true});
				}
			}
		}
	};
};

export default getState;