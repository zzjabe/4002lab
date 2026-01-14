function Header() {
    const logoUrl = "https://itsm-ace.ca/images/logo.svg";

    return (
        <header className="header">
        <div className="logo">
            <a href={logoUrl} target="_blank">
                <img src={logoUrl} alt="Pixell River Logo" />
            </a>
        </div>
        <div>
            <h1>Pixell River Employee Directory</h1>
            <p>Welcome to Pixell River Financial</p>
        </div>
        </header>
    );
}

export default Header;