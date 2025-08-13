import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

interface NavItem {
    path: string;
    label: string;
    icon: string;
}

export default function Navbar() {
    const location = useLocation();
    const { t } = useTranslation();

    // Navigation items
    const navItems: NavItem[] = [
        { path: '/', label: 'home', icon: 'house-door' },
        { path: '/timeline', label: 'timeline', icon: 'clock-history' },
        { path: '/gallery', label: 'gallery', icon: 'images' },
        { path: '/contact', label: 'contact', icon: 'envelope' },
    ];

    // Languages
    const languages: string[] = ['en', 'hu', 'de'];

    const isActive = (path: string): boolean => location.pathname === path;

    const changeLanguage = (lng: string): void => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
        closeMenu();
    };

    const closeMenu = (): void => {
        const navbarCollapse = document.getElementById('navbarNav');
        const navbarToggler = document.querySelector('.navbar-toggler') as HTMLButtonElement;
        
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            // Bootstrap classes eltávolítása/hozzáadása
            navbarCollapse.classList.remove('show');
            navbarToggler.classList.add('collapsed');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    };

    // Navigációs link kattintás kezelése
    const handleNavLinkClick = (): void => {
        closeMenu();
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top modern-navbar">
            <div className="container-fluid">
                {/* Logo */}
                <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
                    <img src="./navbar_icon3.png" alt="Logo" className="logo-img" />
                </Link>

                {/* Mobile toggle button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation content */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* Navigation links */}
                        {navItems.map((item) => (
                            <li key={item.path} className="nav-item">
                                <Link 
                                    to={item.path} 
                                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                                    onClick={handleNavLinkClick}
                                >
                                    <i className={`bi bi-${item.icon} nav-icon`}></i>
                                    <span className="nav-text">{t(item.label)}</span>
                                </Link>
                            </li>
                        ))}

                        {/* Language selector */}
                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle language-selector"
                                id="languageDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                type="button"
                            >
                                <i className="bi bi-globe nav-icon"></i>
                                <span className="nav-text">{i18n.language.toUpperCase().slice(0, 2)}</span>
                            </button>
                            
                            <ul className="dropdown-menu dropdown-menu-end">
                                {languages.map((lng) => (
                                    <li key={lng}>
                                        <button 
                                            className="dropdown-item" 
                                            onClick={() => changeLanguage(lng)}
                                        >
                                            {lng.toUpperCase()}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}