
import React, { useState } from 'react';
import  { useEffect } from 'react';
import {String} from 'react';

var index = null;
 export function getNoteContext(index) {

      var noteContext = [10,10,10,10,10,10,10];
      
     // var data = 'abcd123';
      //const [data, setData] = useState(null)
      //const [isLoading, setLoading] = useState(false)

    /** 
      fetch('1.txt')
          .then((res) => {return res.text();})
          .then((text) => {
            
            data=text
            console.log('inside'+data+'  55555')
            data = data.split('h');
            console.log('inside'+data+'  55555')
            //return  noteContext
          })
    */
      /**
      useEffect(() => {
        setLoading(true)
        fetch('1.txt')
          .then((res) => {return res.text();})
          .then((text) => {
            
            data=text
            console.log('inside'+data+'  55555')
            data = data.split('h');
            console.log('inside'+data+'  55555')
            return  noteContext
          })
      }, [])
     */
     // if (isLoading) return <p>Loading...</p>
     // if (!data) return <p>No profile data</p>
     // if (data) return <p>HAOLE</p>
     //noteContext = data.split(String.fromCharCode(13));
    // data = fetch();
     //console.log('outside' + data)
      return  noteContext
    
  }