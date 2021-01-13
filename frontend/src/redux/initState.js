const initState = () => {
  const IS = {
    users: null || window.localStorage.getItem("user"),
    loader: false,
    contacts: [],
  };

  return IS;
};

export default initState;
