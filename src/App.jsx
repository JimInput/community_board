import './App.css'
import RestaurantCard from "./components/RestaurantCard"
import restaurants from "./data/restaurants.json"

function App() {

  return (
    <div className="main-box">
      <h1 className="title">Top 10 Best Restaurants in Enfield, CT</h1>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
    
    
  );
}

export default App
