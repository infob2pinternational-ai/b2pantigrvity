import { Link } from 'react-router-dom';
import Seo from './Seo';

const NotFound = () => {
    return (
        <>
        <Seo
            title="404 | Page Not Found | B2P International"
            description="The page you requested could not be found. Return to the B2P International homepage to explore LED van advertising services in Thrissur and Kerala."
            robots="noindex,nofollow"
            keywords={null}
        />
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#050914] px-6 py-24 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_30%)]" />
            <div className="relative z-10 mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-slate-300">404 Error</p>
                <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                    This page is off-route, but your campaign does not have to be.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                    The URL you opened does not exist on our site. Head back to the homepage to explore LED van advertising, local promotions, and brand activation services from B2P International.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary hover:text-white"
                    >
                        Back to Home
                    </Link>
                    <Link
                        to="/led-van-advertising"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-black text-white transition-all duration-300 hover:border-brand-primary hover:bg-white/10"
                    >
                        View LED Van Advertising
                    </Link>
                </div>
            </div>
        </section>
        </>
    );
};

export default NotFound;
