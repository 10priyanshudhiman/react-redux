import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchphotos} from '../../redux/photos/photosactions';


const Photorender = ({fetchphotos,photosdata,title,myid}) => {
    
    

    useEffect(()=>{
        
        fetchphotos();
   },[])

   

   const filteredphotos = (photos) => {
     return (
     photos.filter(photo =>( photo.id <= myid*10 && photo.id > (myid-1)*10))
     )
   }
   var test = filteredphotos(photosdata.photos)
   const test2 = (test) => {
     return (
      test.filter(photo => photo.title.includes(photosdata.searchField))
     )
   }
   var test3 = test2(test)
   
   var num = Math.floor((Math.random() * 250) + 1)
   

    return (
        
        
        photosdata.loading ? (
         <h2>Loading</h2>
    ) : photosdata.error ? (
         <h2>{photosdata.error}</h2>
    ) : (
         <div>

                    <div>
                        {   photosdata &&
                            photosdata.photos &&
                            // photosdata.photos.map(photo => (photo.id <= 10 && <p>{photo.title}</p>))}
                           <div>
                               
                               
                               <h5 class ="h">{title}</h5>
     
                               <div>
                               
                               {test3.map(test => (
    
    

<div class="col s12 m7">

<div class="card horizontal small row-custom">
  
    <img src={test.url}/>
  
  <div class="card-stacked test">
  <p class ="data">{test.title}</p>
      
      
      
  <a href={test.url}><p class = "data1">{test.url}</p></a>
    
    
    
    
  </div>
  <div>
    {num >= 75 ? <p class ="c">${num}</p> : <p class = "t">${num}</p>}
    
    <p class = "data1">10:00 A.M</p>
    </div>
</div>
</div>







                               ))}
                               
                               
                               
                               
                               

                                   </div>
                            </div> 
                            
                            }
                    </div>
                </div>
         
    ))

    

    
    };


const mapStateToProps = state => {
    return {
        photosdata: state.photo
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchphotos: () => dispatch(fetchphotos())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Photorender);
