function Footer() {
    return (
        <footer className="relative -z-10 overflow-x-clip">
            <div className="absolute h-[400px] w-[2600px] bottom-0 left-1/2 -translate-x-1/2 bg-[#f6cfbe]/45 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div> 
             <div className="container p-2 md:p-4 lg:max-w-5xl sm:mx-auto">
                <div className="text-center border-t border-gray-900/25 py-6 text-sm md:text-base ">

                <p>&copy;{new Date().getFullYear()}. All Right Reserved.</p>
                <p>Developed by MoonLander</p>
                </div>
             </div>
        </footer>
    )
}

export default Footer
