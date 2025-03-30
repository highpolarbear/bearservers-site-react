const HomePage = () => {
    return (
        <body>
            <div className="container">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                        <g fill="#ffffff">
                            <ellipse cx="50" cy="60" rx="30" ry="20" fill="#ffffff" />
                            <circle cx="50" cy="30" r="20" />
                            <circle cx="43" cy="25" r="3" fill="#333" />
                            <circle cx="57" cy="25" r="3" fill="#333" />
                            <circle cx="50" cy="35" r="2" fill="#333" />
                            <circle cx="35" cy="15" r="5" />
                            <circle cx="65" cy="15" r="5" />
                            <path d="M47,40 C47,45 53,45 53,40" stroke="#333" stroke-width="2" fill="transparent" />
                            <ellipse cx="35" cy="70" rx="7" ry="10" />
                            <ellipse cx="65" cy="70" rx="7" ry="10" />
                        </g>
                    </svg>
                </div>

                <div className="title">
                    <h1>BearServers</h1>
                    <p>The North Pole</p>
                </div>
            </div>

            <footer>
                <p>&copy; 2025 BearServers.co.uk | All Rights Reserved</p>
            </footer>
        </body>


    )
}

export default HomePage;