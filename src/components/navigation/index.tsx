export const Navigation = ({logo, children}: { logo: string, children: React.ReactNode}) => {
    return (
        <nav className="w-full">
            <div className="w-[1280px] max-w-[90vw] m-auto flex justify-between items-center h-24">
                <div>
                    <a href="/"><img src={logo} alt="MotionArt Effect" /></a>
                </div>
                <ul>
                    {children}
                </ul>
            </div>
        </nav>
    )
}

export const NavLink = ({children}: { children: React.ReactNode}) => {
    return <li><a>{children}</a></li>
}

export const NavButton = ({children}: { children: React.ReactNode }) => {
    return <li><button className="bg-white hover:bg-transparent hover:text-foreground border-2 hover:border-foreground rounded-md text-background text-[1.1em] font-regular px-8 py-3 transition-colors">{children}</button></li>
}