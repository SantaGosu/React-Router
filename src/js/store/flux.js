const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { 
				favorite: [],
				allPeople: []
			},
		actions: {
			setAllPeople: (people) => {
				const store = getStore();
				setStore({allPeople: store.allPeople.concat(people)})
			},
			setPlanets: (data) => {
				setStore({planets: data})
			},
			setFavorite: (val) => {
				const store = getStore();
				setStore({favorite: store.favorite.concat(val) })
			},

			unsetFavorite: (val) => {
				const store = getStore();
				setStore:({favorite: store.favorite})
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
