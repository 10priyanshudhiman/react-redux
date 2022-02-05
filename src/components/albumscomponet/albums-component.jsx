import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import { fetchalbums } from '../../redux/albums/albumsactions';
import Photorender from '../Renderphotos/RenderPhotos';



const  AlbumsList =  ({albumsdata,fetchalbums}) => {

     useEffect(()=>{
          fetchalbums()
     },[])

     const filteredalbums = (photos) => {
          return (
          photos.filter(photo =>( photo.id <=5))
          )
        }
        var test = filteredalbums(albumsdata.albums)
        const test2 = (test) => {
          return (
           test.filter(photo => photo.title.includes(albumsdata.searchField))
          )
        }
        var test3 = test2(test)

     return albumsdata.loading ? (
          <h2>Loading</h2>
     ) : albumsdata.error ? (
          <h2>{albumsdata.error}</h2>
     ) : (
          <div>
               
               <div>

                        
               
                    {

                         
                         
                    
                         test3.map((album) => { 
                              return (
                                   
                                   <Photorender key = {album.id} title = {album.title} myid = {album.id} />  
                                   

                              );
                               
                    }
                       

                         )}
               </div> 
               
               </div>
          
     )


};


const mapStateToProps = state => {
     return {
         albumsdata: state.album,
         
        
     }
   }
   
const mapDispatchToProps = dispatch => {
     return {
       fetchalbums: () => dispatch(fetchalbums())
     }
   }

export default connect(mapStateToProps,mapDispatchToProps)(AlbumsList);