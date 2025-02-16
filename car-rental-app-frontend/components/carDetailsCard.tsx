export default function CarDetailsCard({ }) {
    let car = { name: 'Car', image: 'https://images.unsplash.com/photo-1557683316-973673baf926', seats: 4, price: 100, description: 'This is a car' };
    return (
        <div className="text-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">{car.name}</h2>
            <img src={car.image} alt={car.name} className="w-full h-64 object-cover mb-6" />
            <div className="flex justify-between items-center mb-6">
                <p>{car.seats} seats</p>
                <p>${car.price}/day</p>
            </div>
            <p>{car.description}</p>
            </div>
            );
}