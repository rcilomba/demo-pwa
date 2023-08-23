


const Layout = () => {
    return (
        <>
            <header>
                <p>This is header</p>
            </header>
            <main>
                <Outlet />
                <footer>
                    <p>Do it properly</p>
                </footer>
            </main>
        </>
      );
}
 
export default Layout;