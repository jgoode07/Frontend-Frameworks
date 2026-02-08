import Header from './Components/Common/Header';
import ProductsPage from './Components/Market/ProductsPage';

export default function App() {
  return (
    <>
      <Header />
      <main className="page">
        <ProductsPage />
      </main>
    </>
  );
}
