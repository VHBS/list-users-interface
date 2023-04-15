import React, { useEffect, useContext } from 'react';
import Link from 'next/link';
import { UsersContext } from '@component/context/Context';
import { UserNotSelected } from '@component/components/UserNotSelected';
import { capitalize } from '@component/utils/utils';
import { FiMail, FiPhone } from 'react-icons/fi';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function UsersPage() {
  const { userData } = useContext(UsersContext);
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  if (!('name' in userData)) return <UserNotSelected />;

  return (
    <main className="container min-h-screen mx-auto px-3">
      <Link href={`/`} className="hover:animate-pulse">
        HOME
      </Link>

      <div
        className="my-3
      relative
      bg-white rounded
      drop-shadow
      user-details
      flex
      flex-col"
      >
        <img
          className="w-1/2 absolute rounded-full drop-shadow-md user-picture-details"
          alt="United States"
          src={userData.picture.large}
        />
        <div className="container container-user-country-flag-details rounded-t">
          <div className="w-full gradient-flag-details ">
            <img
              className="w-full relative rounded-t user-country-flag-details"
              alt="United States"
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${userData.nat}.svg`}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-10">
          <div className="md:col-span-4 lg:col-span-3 2xl:col-span-2 p-3">
            <div className="w-full py-4 px-3 flex flex-col justify-start border border-gray-100 rounded">
              <h1 className="font-bold pb-3 text-start truncate border-b border-gray-200">
                {userData.name.first} {userData.name.last}
              </h1>
              <div className="flex justify-between items-center text-gray-700 py-1">
                <p>Age:</p>
                <p>{userData.dob.age}</p>
              </div>
              <div className="flex justify-between items-center text-gray-700 py-1">
                <p>Gender:</p>
                <p>{capitalize(userData.gender)}</p>
              </div>
              <div className="flex justify-between items-center text-gray-700 py-1">
                <p>Country:</p>
                <p>{userData.location.country}</p>
              </div>
              <div className="flex justify-between items-center text-gray-700 py-1">
                <p>State:</p>
                <p>{userData.location.state}</p>
              </div>
              <div className="flex justify-between items-center text-gray-700 py-1">
                <p>City:</p>
                <p>{userData.location.city}</p>
              </div>
              <div className="flex justify-between text-gray-700 py-1">
                <p>Address:</p>
                <p className="text-end">{userData.location.street.name}</p>
              </div>

              <div className="w-full flex justify-center  py-1">
                <button
                  className="rounded-l
                    w-1/3
                    p-2.5
                    bg-stone-300
                    text-slate-100
                    hover:bg-green-400
                  "
                  type="button"
                  title={userData.cell}
                  onClick={() => navigator.clipboard.writeText(userData.cell)}
                >
                  <FiPhone className="mx-auto" />
                </button>
                <button
                  className="rounded-r
                    w-1/3
                    p-2.5
                    bg-blue-500
                    text-slate-100
                    hover:bg-blue-800
                    border-l
                  "
                  type="button"
                  title={userData.email}
                  onClick={() => navigator.clipboard.writeText(userData.email)}
                >
                  <FiMail className="mx-auto" />
                </button>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-7 2xl:col-span-8 p-3">
            <div className="w-full py-4 px-3 flex flex-col justify-start border border-gray-100 rounded">
              {'name' in userData && (
                <MapContainer
                  id="map"
                  center={[
                    Number(userData.location.coordinates.latitude),
                    Number(userData.location.coordinates.longitude),
                  ]}
                  zoom={10}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[
                      Number(userData.location.coordinates.latitude),
                      Number(userData.location.coordinates.longitude),
                    ]}
                  >
                    <Popup>
                      Here is {userData.name.first} {userData.name.last} house.
                    </Popup>
                  </Marker>
                </MapContainer>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
