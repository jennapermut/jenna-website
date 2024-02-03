import Footer from './Footer';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Resume() {
    return (
        <div className="flex flex-col h-full w-full overflow-x-hidden flex-1">
            <div className="text-left font-semibold text-3xl mb-12">
                <Link to="/" className="text-primary hover:underline dark:text-primary-light">
                    Jenna Permut
                </Link>{' '}
                - Résumé
            </div>
        </div>
    );
}
