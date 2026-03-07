import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} NextToys. All rights reserved.</span>
                        </div>

                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;