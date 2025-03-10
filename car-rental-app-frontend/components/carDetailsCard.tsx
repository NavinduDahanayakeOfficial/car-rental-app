import Image from 'next/image';
import GearShifter from '../app/assets/images/gear-shifter.svg';
import FuelMeter from '../app/assets/images/fuel-meter.svg';
import AirCon from '../app/assets/images/air-con.svg';
import CarSkeleton from '../app/assets/images/car-skeleton.svg';

export default function CarDetailsCard({ }) {
    let car = { brand: 'Car', type:'Sedan', image: 'https://images.unsplash.com/photo-1557683316-973673baf926', transmission: 'Automatic', fuelType:'PB 95', airCon:'Air Conditioned', price: 100, description: 'This is a car' };
    return (
        <div className="text-black p-6 rounded-lg shadow-md bg-gray-50">
            <Image src={CarSkeleton} alt={car.brand} className="w-full md:h-64 md:object-cover mb-6" />
            <div className="display flex justify-between items-center mb-1">
            <span className="text-2xl font-semibold ">{car.brand}</span>            
            <span className="text-xl font-semibold text-customPurple"><p>${car.price}</p></span>
            </div>
            <div className="flex justify-between items-center mb-6 opacity-60">
            <p>{car.type}</p>
            <p>per day</p>
            </div>
            <div className="display md:flex justify-between items-center">
            <div className='display flex'>
                <Image src={GearShifter} alt="Seat" />
                <span className="ml-2 opacity-60">{car.transmission}</span>
            </div>
            <div className='display flex my-4 md:my-0'>
                <Image src={FuelMeter} alt="Seat" />
                <span className="ml-2 opacity-60">{car.fuelType}</span>
            </div>
            <div className='display flex'>
                <Image src={AirCon} alt="Seat" />
                <span className="ml-2 opacity-60">{car.airCon}</span>
            </div>
            </div>
            <div className='p-2 mt-6 bg-primary rounded-lg'>
                <button type='button' className='w-full justify-center'><span className='text-white font-bold'>View Details</span></button>
            </div>
            </div>
            );
}