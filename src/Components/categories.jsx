import React from 'react';

const Categories = () => {

    const categories = [
    { name: 'Fitness', href: '/Fitness' },
    { name: 'Travel', href: '/Travel'},
    { name: 'Gaming', href: '/Gaming' },
    ] 
    function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }

    function handleCategories(href){

    }

    var currentHref = window.location.pathname;
    return (
    <div className='flex justify-center bg-cyan-50 rounded-b-md categoriesContainer'>
        {categories.map((item)=>(
            <a
            // onClick={handleCategories(item.href)}
           key={item.name}
           href={item.href}
           className={classNames(
                    (item.href==currentHref) ? 'no-underline bg-teal-600 text-white' : 'no-underline text-black hover:bg-teal-600 ',
                    'no-underline px-3 py-2 rounded-md rounded-t-none text-lg font-medium'
                    )}
                    aria-current={item.href==currentHref ? 'page' : undefined}
            >
                        {item.name}
            </a>
        ))
        }
    </div>
  );
}

export default Categories;
