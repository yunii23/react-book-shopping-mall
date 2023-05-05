const CoffeeList = [
    {
        id: 1,
        name: "Latte",
        image: "image1.PNG",
    },
    {
        id: 2,
        name: "Americano",
        image: "image2.PNG",
    },
];

function Coffee({ fav, picture }) {
    return (
        <div>
            <h2>{fav}는 맛있다!</h2>
            <img src={require("./image/" + picture)} alt="ex" />
        </div>
    );
}

function App() {
    return (
        <div className="App">
            {CoffeeList.map((menu) => (
                <Coffee fav={menu.name} picture={menu.image} />
            ))}
        </div>
    );
}

export default App;
