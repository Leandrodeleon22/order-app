import React from 'react';
import Image from 'next/image';
import freshBurger from '../../media/freshb.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function About() {
  return (
    <div className="flex justify-between mx-4 mt-14">
      <div className="w-full md:w-1/2 p-4">
        <Image src={freshBurger} alt="Fresh Burger" className='rounded-xl'/>
        <p className="mt-4 text-center text-gray-600">Enjoy our fresh Canadian burgers and more, at Intro Foods.</p>
      </div>

      <div className="w-full md:w-1/2 p-4 mt-24 tracking-wide leading-relaxed text-lg">
        <h2 className="text-4xl font-bold mb-6 text-center">About Intro Foods</h2>
        <p>Welcome to Intro Foods, where Canadian culinary delights await you! Established by <a href="https://www.linkedin.com/in/andrii-stefankiv/" target="_blank" class="text-red-500 font-bold">Andrew Stefankiv</a> and <a href="https://www.linkedin.com/in/leandrodeleon4444/" target="_blank" class="text-red-500 font-bold">Leandro de Leon</a>, our restaurant is dedicated to serving the finest Canadian burgers, pizza, beverages, and desserts.
At Intro Foods, we understand that everyone has their own dining preferences. That`s why we cater to introverts and those who prefer minimal interaction. Our mobile-friendly website allows you to browse our menu, place your order, and make payments with ease, all from the comfort of your own device.
Whether you`re craving a juicy burger, a mouthwatering slice of pizza, a refreshing beverage, or a decadent dessert, we have something to satisfy every appetite. Join us at Intro Foods for a delicious dining experience unlike any other.
Come and discover why Intro Foods is the perfect choice for those who value convenience, quality, and a warm Canadian welcome. We look forward to serving you soon!
        </p>
        <br />
        <div className="flex justify-center mt-4">
          <a href="https://twitter.com"  className="mr-10 animate-pulse">
            <FontAwesomeIcon icon={faTwitter} width='45' height='45'/>
          </a>
          <a href="https://instagram.com"  className="mr-10 animate-pulse">
            <FontAwesomeIcon icon={faInstagram} width='45' height='45'/>
          </a>
          <a href="https://linkedin.com"  className="mr-10 animate-pulse">
            <FontAwesomeIcon icon={faLinkedin} width='45' height='45'/>
          </a>
          <a href="https://facebook.com"  className="mr-10 animate-pulse">
            <FontAwesomeIcon icon={faFacebook} width='45' height='45'/>
          </a>
        </div>
      </div>
    </div>
  );
}
