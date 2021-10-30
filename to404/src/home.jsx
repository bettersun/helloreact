import { Redirect, Route, Switch, Link } from "react-router-dom";

function Home() {
    return (
        <>
            <ul>
                <ul><Link to="/home">Home</Link></ul>
                <ul><Link to="/about">About</Link></ul>
                <ul><Link to="/nomatch">No Router</Link></ul>
            </ul>

            <Switch>
                <Route path="/" exact>
                    <div>Home</div>
                </Route>
                <Route path="/home" exact>
                    <div>Home</div>
                </Route>
                <Route path="/about" exact>
                    <div>About</div>
                </Route>
                <Redirect path="*" to="/404"></Redirect>
            </Switch>
        </>
    );
}

export default Home;