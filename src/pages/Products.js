import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>The products page</h1>
      <ul>
        <li><Link to='products/p1'>Product 1</Link></li>
        <li><Link to='products/p2'>Product hg</Link></li>
        <li><Link to='products/p3'>Product kjhcc</Link></li>
      </ul>
    </section >
  );
};

export default Products;