import { useNavigate } from 'react-router-dom';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const navigate = useNavigate();

  // Função que verifica se deve redirecionar para login
  const handleProtectedAction = () => {
    const isLoggedIn = false; // Substitua pela lógica real de autenticação
    if (!isLoggedIn) {
      navigate('/login'); // Redireciona para login
    } else {
      // Exemplo: navigate('/favorites');
    }
  };

  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px' }}>
      {/* Ícones que exigem login */}
      <FaHeart onClick={handleProtectedAction} style={{ cursor: 'pointer' }} />
      <FaUser onClick={handleProtectedAction} style={{ cursor: 'pointer' }} />
      <FaShoppingCart onClick={handleProtectedAction} style={{ cursor: 'pointer' }} />
    </nav>
  );
}