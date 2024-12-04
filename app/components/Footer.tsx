const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Hegi Tri Saputra. All Rights Reserved.</p>
                <div className="mt-2">
                    <span className="text-blue-400 hover:text-blue-500 mr-4">Privacy Policy</span>
                    <span className="text-blue-400 hover:text-blue-500">Terms of Service</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;