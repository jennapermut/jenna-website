import { Link } from 'react-router-dom';
import '../App.css';

export default function Home() {
    return (
        <div className="flex flex-col w-full h-full flex-1">
            <div className="flex justify-left gap-7">
                <img className="profile-image" alt="Profile" src={require('../assets/profile.jpg')}></img>
                <div className="flex flex-col items-start">
                    <header className="text-4xl font-bold">Jenna Permut</header>
                    <div className="text-left text-xl opacity-90">Digital Storyteller( Developer / Storyteller )</div>
                </div>
            </div>

            <p className='text-left mt-10 mb-4'>
                Assoc. Software Engineer{' '}
                <a
                    className="text-primary hover:underline dark:text-primary-light font-medium underline"
                    href="https://disneyconnect.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    @Disney
                </a>.
            </p>

            <div className="text-xl text-left font-bold my-5">TL;DR</div>
            <div className="flex flex-col items-start mb-10 text-primary">
                <AppLink>
                    <Link to="/resume" className="flex gap-2 items-baseline font-medium ">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Résumé</span>
                    </Link>
                </AppLink>
            </div>

            <div className="text-xl text-left font-bold my-5">Connect with me!</div>
            <div className="flex flex-col items-start center-primary">
                <AppLink>
                    <a
                        className="flex gap-2 items-baseline font-medium "
                        href="https://github.com/jennapermut"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-github fa-fw"></i>
                        <div>@jennapermut</div>
                    </a>
                </AppLink>
                <AppLink>
                    <a
                        className="flex gap-2 items-baseline font-medium "
                        href="https://www.linkedin.com/in/jennapermut"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-linkedin fa-fw"></i>
                        <div>@jennapermut</div>
                    </a>
                </AppLink>
            </div>
        </div>
    );
}

function AppLink({ children }) {
    return (
        <div className="flex gap-2 px-2 py-2 text-primary cursor-pointer rounded items-baseline hover:bg-secondary duration-75 dark:text-primary-light dark:hover:bg-secondary-light">
            {children}
        </div>
    );
}
