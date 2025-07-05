function Slider(){
    const coffeeBrands = [
  {
    "id": 1,
    "name": "Lavazza",
    "image": "src/lavazza-logo-png.png",
    "origin": "Italy"
  },
  {
    "id": 2,
    "name": "Illy",
    "image": "src/illy-logo.png",
    "origin": "Italy"
  },
  {
    "id": 3,
    "name": "Blue Bottle",
    "image": "src/blue-bottle.png",
    "origin": "United States"
  },
  {
    "id": 4,
    "name": "Tim Hortons",
    "image": "src/tim-hortons-logo.png",
    "origin": "Canada"
  },
  {
    "id": 5,
    "name": "Peet's Coffee",
    "image": "src/peets-coffee-logo.png",
    "origin": "United States"
  }
];

    const duplicatedBrands = [...coffeeBrands, ...coffeeBrands];

    return (
        <div className="slider-section">
            <h1 className="section-title fade-up-element">Our Brands</h1>
            <div className="slider-container fade-up-element">
                <div className="slider-box">
                    {duplicatedBrands.map((coffeeBrand, index) => (
                        <div key={`${coffeeBrand.id}-${index}`} className="coffee-brand">
                            <img className="brand-image" src={coffeeBrand.image} alt="brand image"/>
                            <h2 className="brand-name">{coffeeBrand.name}</h2>
                            <h3 className="brand-origin">Origin: {coffeeBrand.origin}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Slider;