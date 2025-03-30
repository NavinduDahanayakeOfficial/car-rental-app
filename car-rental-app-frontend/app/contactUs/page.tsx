import Image from "next/image";
import carImage from "@/public/images/car.jpg";
import toyotaLogo from "@/public/images/toyota.jpg";
import fordLogo from "@/public/images/ford.jpg";
import mercedesLogo from "@/public/images/mercedes.png";
import jeepLogo from "@/public/images/jeep.jpg";
import bmwLogo from "@/public/images/bmw.png";
import audiLogo from "@/public/images/audi.png";
import BookCarForm from "@/components/bookCarForm";

export default function Page() {
   return (
      <div className="min-h-screen bg-white text-gray-800">
         <div className="container mx-auto p-8">
            {/* Page Title */}
            <div className="text-center mb-8">
               <h1 className="text-4xl font-bold">Contact Us</h1>
               {/* <p className="text-sm text-gray-500 mt-2">Home / Contact Us</p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <BookCarForm />

               {/* Image Section */}
               <div className="flex justify-center items-center bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                     src={carImage}
                     alt="Blurred Image"
                     className="object-cover w-full h-64"
                     width={500} // Set appropriate width
                     height={256} // Set appropriate height
                  />
               </div>
            </div>

            {/* Contact Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12 text-center">
               <div>
                  <p className="text-yellow-600 text-xl">Address</p>
                  <p className="mt-2 text-gray-700">
                     Oxford Ave. Cary, NC 27511
                  </p>
               </div>
               <div>
                  <p className="text-yellow-600 text-xl">Email</p>
                  <p className="mt-2 text-gray-700">nwiger@yahoo.com</p>
               </div>
               <div>
                  <p className="text-yellow-600 text-xl">Phone</p>
                  <p className="mt-2 text-gray-700">+537 547-6401</p>
               </div>
               <div>
                  <p className="text-yellow-600 text-xl">Opening Hours</p>
                  <p className="mt-2 text-gray-700">Sun-Mon: 10am - 10pm</p>
               </div>
            </div>
            <div className="mt-16">
               <h2 className="text-3xl font-bold text-center mb-8">
                  Latest blog posts & news
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     {
                        title: "How To Choose The Right Car",
                        date: "12 April 2024",
                     },
                     {
                        title: "Which plan is right for me?",
                        date: "12 April 2024",
                     },
                     {
                        title: "Enjoy Speed, Choice & Total Control",
                        date: "12 April 2024",
                     },
                  ].map((post, index) => (
                     <div
                        key={index}
                        className="rounded-lg overflow-hidden bg-gray-100 shadow-md"
                     >
                        <Image
                           src={carImage} // Placeholder image for each blog post
                           alt={post.title}
                           width={500}
                           height={300}
                           className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                           <h3 className="text-xl font-semibold">
                              {post.title}
                           </h3>
                           <p className="text-gray-600 text-sm mt-1">
                              News / {post.date}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Car Brands Section */}
            <div className="mt-16">
               <div className="flex justify-center space-x-8">
                  {[
                     toyotaLogo,
                     fordLogo,
                     mercedesLogo,
                     jeepLogo,
                     bmwLogo,
                     audiLogo,
                  ].map((logo, index) => (
                     <Image
                        key={index}
                        src={logo}
                        alt={`Car brand logo ${index + 1}`}
                        width={60}
                        height={60}
                        className="grayscale hover:grayscale-0"
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
