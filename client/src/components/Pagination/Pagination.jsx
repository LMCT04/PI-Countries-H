import {  useState } from 'react'
import style from './Pagination.module.css';
import CardsContainer from '../CardsContainer/CardsContainer'

const Pagination = ({countriesFiltered}) => {
  
   const countriesPerPage= 10;
   //cantidad de countries por página

   const [currentPage, setCurrentPage ]= useState(1);
    
   const start = (currentPage - 1) * 10;
   const end = start + 10;
   
   const paginated = countriesFiltered.slice(start,end);


   //número de página:
   const pageNumbers = []
   
   for(let i=1; i<=Math.ceil(countriesFiltered.length/countriesPerPage); i++) {
      pageNumbers.push(i)
   }
   //recorro cada country que me llegó ya filtrado y lo divido por 10, y lo pusheo al array.

   return (
         <div>

            <ul className={style.pagination}>
               {pageNumbers && 
               pageNumbers.map(number =>(
               <li key={number} >
                  <button onClick={() => setCurrentPage(number)}>{number}</button>
               </li>
               ))}

            </ul>       

            <CardsContainer countries={paginated}/>    

         </div>


)
}


export default Pagination;