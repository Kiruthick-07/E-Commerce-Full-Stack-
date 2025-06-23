import Hero from './Hero';
import Header from './Header';
import Category from './Category';
import Products from './Products';
import Review from './Review';

function Dashboard() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <Products />
      <Review />
    </div>
  );
}

export default Dashboard;
