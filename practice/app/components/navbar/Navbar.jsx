import React from 'react'
import Link from 'next/link'



const links =[
   { id: 1,
    title: "Home",
    url:"/",
   },

   { id: 2,
    title: "dashboard",
    url:"dashboard",
   },

   { id: 3,
    title: "portfolio",
    url:"portfolio",
   },

   { id: 4,
    title: "about",
    url:"about",
   },

   { id: 5,
    title: "contact",
    url:"contact",
   }
]

function Navbar() {
  return (
    <div>
    

      <div className="mt-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;