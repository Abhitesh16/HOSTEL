import React from 'react';
import { MapPin, Users, Wifi, Wind, Bath, Coffee } from 'lucide-react';

export function ExploreHostel() {
  const hostels = [
    {
      id: 1,
      name: 'APJ Abdul Kalam Chatra Niwas',
      type: 'Boys Hostel',
      capacity: 60,
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
      description: 'Modern facility with well-ventilated rooms, 24/7 security, and high-speed internet connectivity. Equipped with study halls and recreational areas.',
      amenities: [
        { icon: Wifi, label: 'High-Speed Wi-Fi' },
        { icon: Coffee, label: 'Mess Facility' }
      ]
    },
    {
      id: 2,
      name: 'Baghini Nevedita Chatri Niwas',
      type: 'Girls Hostel',
      capacity: 46,
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800',
      description: 'A secure and comfortable environment dedicated for female students. Features in-house medical assistance, common lounge, and strict security protocols.',
      amenities: [
        { icon: Wifi, label: 'High-Speed Wi-Fi' },
        { icon: Users, label: 'Common Lounge' }
      ]
    },
    {
      id: 3,
      name: 'Gents Hostel-05',
      type: 'Boys Hostel',
      capacity: 100,
      image: 'https://images.unsplash.com/photo-1522771731470-3138b8fae471?auto=format&fit=crop&q=80&w=800',
      description: 'Budget-friendly accommodation with basic amenities, spacious dining area, and sports facilities out front.',
      amenities: [
        { icon: Bath, label: 'Common Bathrooms' },
        { icon: Coffee, label: 'Dining Area' }
      ]
    },
    {
      id: 4,
      name: 'Begum Rukia Chatri Niwas',
      type: 'Girls Hostel',
      capacity: 100,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
      description: 'Quiet and serene atmosphere suitable for focused studies. Includes library access and green surroundings.',
      amenities: [
        { icon: Wind, label: 'Well Ventilated' },
        { icon: MapPin, label: 'Nature Views' }
      ]
    },
    {
      id: 5,
      name: 'Ladies Hostel-06',
      type: 'Girls Hostel',
      capacity: 100,
      image: 'https://images.unsplash.com/photo-1541844053589-346841d0b34c?auto=format&fit=crop&q=80&w=800',
      description: 'Modern architecture with spacious rooms. Equipped with indoor sports facilities and a large dining hall.',
      amenities: [
        { icon: Wifi, label: 'Wi-Fi Access' },
        { icon: Users, label: 'Indoor Sports' }
      ]
    },
    {
      id: 6,
      name: 'Mother Terrasa Chatri Niwas',
      type: 'Girls Hostel',
      capacity: 61,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      description: 'A peaceful residence with a beautiful garden, reading room, and medical facilities on standby.',
      amenities: [
        { icon: MapPin, label: 'Close to Library' },
        { icon: Coffee, label: 'Canteen' },
        { icon: Wind, label: 'AC Options' }
      ]
    },
    {
      id: 7,
      name: 'Sahid Kamala Chatri Niwas',
      type: 'Girls Hostel',
      capacity: 131,
      image: 'https://images.unsplash.com/photo-1513694203202-c94318fb4839?auto=format&fit=crop&q=80&w=800',
      description: 'Well-maintained hostel providing a comfortable stay with high security and regular maintenance services.',
      amenities: [
        { icon: Wifi, label: 'High-Speed Wi-Fi' },
        { icon: Bath, label: 'Hot Water Facility' }
      ]
    },
    {
      id: 8,
      name: 'Ishwar Chandra Vidyasagar Chatra Niwas',
      type: 'Boys Hostel',
      capacity: 120,
      image: 'https://images.unsplash.com/photo-1596276122653-651a3898309f?auto=format&fit=crop&q=80&w=800',
      description: 'Premium boys accommodation featuring modern recreational areas, a gymnasium, and spacious study halls.',
      amenities: [
        { icon: Wifi, label: '24/7 Wi-Fi' },
        { icon: Users, label: 'Gymnasium' },
        { icon: Wind, label: 'Well Ventilated' }
      ]
    },
    {
      id: 9,
      name: 'Kaji Nazrul Islam Chatra Niwas',
      type: 'Boys Hostel',
      capacity: 90,
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800',
      description: 'Centrally located hostel with excellent dining facilities, laundry services, and a vibrant community atmosphere.',
      amenities: [
        { icon: Coffee, label: 'Huge Mess' },
        { icon: MapPin, label: 'Central Location' }
      ]
    },
    {
      id: 10,
      name: 'Sahid Khudiram Bose Chatra Niwas',
      type: 'Boys Hostel',
      capacity: 46,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800',
      description: 'Comfortable living spaces with an emphasis on academic excellence. Includes dedicated discussion rooms and high-speed internet.',
      amenities: [
        { icon: Wifi, label: 'High-Speed Wi-Fi' }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 border-b-4 border-sky-500 pb-2 inline-block">Explore Hostels</h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl">
          Discover the various accommodation options available on our campus. Each hostel offers unique facilities designed for comfort and academic success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {hostels.map((hostel) => (
          <div key={hostel.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="relative h-64 w-full">
              <img src={hostel.image} alt={hostel.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sky-800 shadow-sm border border-white/20">
                {hostel.type}
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{hostel.name}</h3>
                  <div className="flex items-center text-sm text-slate-500 font-medium">
                    <Users className="w-4 h-4 mr-1.5" />
                    Capacity: {hostel.capacity} students
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
                {hostel.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
