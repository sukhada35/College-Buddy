import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
function App() {
	return (
		// this is called as a fragment, normally it can only return one component hence we use fragments to return multiple
		<> 
		<Header></Header>
		<Footer></Footer>
		</>
	);
}

export default App;
