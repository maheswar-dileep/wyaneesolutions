import { Button } from '../../components/ui/button';

const Home = () => {
    return (
        <div className="bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 text-center p-10">
                <h1 className="text-5xl font-extrabold mb-4">
                    Make Your Mark with{' '}
                    <span className="text-yellow-300">Bold Branding</span>
                </h1>
                <p className="text-lg max-w-2xl mb-6">
                    We're the creative agency that turns visions into
                    experiences. Let's bring your brand to life.
                </p>
                <button className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">
                    Get Started
                </button>
            </section>

            {/* Services Section */}
            <section className="py-20 px-10">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What We Do
                </h2>
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-4">
                            Brand Identity
                        </h3>
                        <p>
                            Crafting unique brand identities that stand out and
                            resonate with your audience.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-4">
                            Web Design
                        </h3>
                        <p>
                            Creating websites that are as beautiful as they are
                            effective, optimized for performance.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-4">
                            Marketing Strategy
                        </h3>
                        <p>
                            From social media to ad campaigns, we bring your
                            brand story to the right audiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-20 px-10 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Stand Out?</h2>
                <p className="text-lg max-w-2xl mx-auto mb-8">
                    Our team is here to make your brand unforgettable. Let’s
                    build something incredible together.
                </p>
                <button className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">
                    Contact Us
                </button>
            </section>
        </div>
    );
};

export default Home;
