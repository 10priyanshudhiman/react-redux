import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import { fetchalbums } from '../../redux/albums/albumsactions';
import Photorender from '../Renderphotos/RenderPhotos';



const  AlbumsList =  ({albumsdata,fetchalbums}) => {

     useEffect(()=>{
          fetchalbums()
     },[])
     return albumsdata.loading ? (
          <h2>Loading</h2>
     ) : albumsdata.error ? (
          <h2>{albumsdata.error}</h2>
     ) : (
          <div>
               
               <div>

                        
               
                    {

                         
                         
                    
                         albumsdata.albums.map((album) => { 
                              return (
                                   album.id <=5 &&
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
         albumsdata: state.album
     }
   }
   
const mapDispatchToProps = dispatch => {
     return {
       fetchalbums: () => dispatch(fetchalbums())
     }
   }

export default connect(mapStateToProps,mapDispatchToProps)(AlbumsList);