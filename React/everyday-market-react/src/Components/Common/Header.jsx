export default function Header() {
    return (
        <header className="header">
            <div className="header__brand">
                <div className="header__logo" aria-hidden="true" />
                <div>
                    <h1 className="header__title">Goode Picks</h1>
                    <p className="header__subtitle">Only the Good Stuff</p>
                </div>
            </div>
        </header>
    );
}
