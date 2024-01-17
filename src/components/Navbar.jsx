import { Link } from 'react-router-dom';

// Navbar.jsx
function Navbar({ itemId, categoryId }) {
    return (
        <nav className="navbar">
            <Link to="/">Brand</Link>
            {/* Asegúrate de reemplazar `itemId` y `categoryId` con los ids reales */}
            <Link to={`/item/${itemId}`}>Item</Link>
            <Link to={`/category/${categoryId}`}>Category</Link>
        </nav>
    );
}

export default Navbar;