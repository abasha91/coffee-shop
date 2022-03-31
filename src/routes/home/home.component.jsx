import Directory from '../../directory/directory.component'

const Home = () => { 

  const categories = [
    {
      "id": 1,
      "title": "sandwiches",
      "imageUrl": "https://i.ibb.co/58LPX39/chees.jpg"
    },
    {
      "id": 2,
      "title": "soft-drinks",
      "imageUrl": "https://i.ibb.co/HFYRW0s/pepsi.jpg"
    },
    {
      "id": 3,
      "title": "cookies",
      "imageUrl": "https://i.ibb.co/RbrVwxB/Sugar-Cookie.jpg"
    },
    {
      "id": 4,
      "title": "Chips",
      "imageUrl": "https://i.ibb.co/K5cCP8z/chips.jpg"
    },
    {
      "id": 5,
      "title": "combos",
      "imageUrl": "https://i.ibb.co/q7zYMfv/Tuna-Combo.jpg"
    }
  ]
  

  return (
    <Directory categories={categories} />
  );
}
export default Home;
